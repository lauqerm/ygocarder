import ndarray, { NdArray } from 'ndarray';
import cwise from 'cwise';
import ops from 'ndarray-ops';
import pool from 'typedarray-pool';
import phase2_1 from 'distance-transform/lib/p1';
import phase2_2 from 'distance-transform/lib/p2';
import phase2_inf from 'distance-transform/lib/pinf';
import phase2_p from 'distance-transform/lib/pp';

var binarize = cwise({
  args: ['array', 'array', 'scalar'],
  body: function(out, a, inf) {
    out = a ? 0 : inf;
  }
});

function phase1(array, nrows, ncols) {
  var i, j, ptr=0, d, min = Math.min;
  for(i=0; i<nrows; ++i) {
    d = array[ptr++];
    for(j=1; j<ncols; ++j) {
      d = min(array[ptr], d+1);
      array[ptr++] = d;
    }
    for(j=0; j<ncols; ++j) {
      d = min(array[--ptr], d+1);
      array[ptr] = d;
    }
    ptr += ncols;
  }
}

export function distanceTransform(array: NdArray, p) {
    var d = array.shape.length
        , shape = array.shape.slice(0)
        , stride = new Array(d)
        , size = 1
        , stack_size = 0
        , inf = 0
        , i, j, n, s, tmp, m;
    p = p || 2;
    for(i=d-1; i>=0; --i) {
        stride[i] = size;
        size *= shape[i];
        inf += shape[i];
        stack_size = Math.max(stack_size, shape[i]);
    }

    //Allocate scratch buffers
    var b0_t = pool.mallocDouble(size)
        , b0 = ndarray(b0_t, shape.slice(0), stride.slice(0), 0)
        , b1_t = pool.mallocDouble(size)
        , b1 = ndarray(b1_t, shape.slice(0), stride.slice(0), 0)
        , s_q = pool.mallocUint32(stack_size)
        , t_q = pool.mallocUint32(stack_size);

    var bx_t = pool.mallocDouble(size)
    , bx = ndarray(bx_t, shape.slice(0), stride.slice(0), 0);
    for (let i = 0; i < array.shape[0]; i++) {
        for (let j = 0; j < array.shape[1]; j++) {
          bx.set(i, j, array.get(i, j) ? 0 : 100);
        }
      }
      console.log('bx', bx);
    //Perform first phase of distance transform
    // binarize(bx, array, inf);
    phase1(bx.data, (size/shape[d-1])|0, shape[d-1]|0);

    

    //Second passes
    for(i=d-1; i>0; --i) {
        s = b1.stride;
        n = 1;
        for(j=i-1; j<d; ++j) {
        s[j] = n;
        n *= shape[j];
        }
        for(j=i-2; j>=0; --j) {
        s[j] = n;
        n *= shape[j];
        }
        ops.assign(b1, bx);
        
        //Execute phase 2
        m = shape[i-1];
        if(!isFinite(p)) {
        phase2_inf(b1.data, (size/m)|0, m|0, s_q, t_q);
        } else if(p === 1) {
        phase2_1(b1.data, (size/m)|0, m|0, s_q, t_q);
        } else if(p === 2) {
        phase2_2(b1.data, (size/m)|0, m|0, s_q, t_q);
        } else if(p < 1) {
        throw new Error('Values of p < 1 are not supported');
        } else {
        phase2_p(b1.data, (size/m)|0, m|0, s_q, t_q, p);
        }
        
        //Swap buffers
        tmp = bx;
        bx = b1;
        b1 = tmp;
    }

    //Copy bx to result
    ops.assign(array, bx);

    pool.freeDouble(b0_t);
    pool.freeDouble(b1_t);
    pool.freeUint32(s_q);
    pool.freeUint32(t_q);
    return array;
}