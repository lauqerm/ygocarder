import ndarray, { NdArray } from 'ndarray';
import ops from 'ndarray-ops';
import pool from 'typedarray-pool';
import phase2_1 from 'distance-transform/lib/p1';
import phase2_2 from 'distance-transform/lib/p2';
import phase2_inf from 'distance-transform/lib/pinf';
import phase2_p from 'distance-transform/lib/pp';

function phase1(array: Float64Array<ArrayBufferLike>, rowCount: number, colCount: number) {
    let i: number, j: number, ptr = 0, nextPoint: number;
    for (i = 0; i < rowCount; ++i) {
        nextPoint = array[ptr++];
        for (j = 1; j < colCount; ++j) {
            nextPoint = Math.min(array[ptr], nextPoint + 1);
            array[ptr++] = nextPoint;
        }
        for (j = 0; j < colCount; ++j) {
            nextPoint = Math.min(array[--ptr], nextPoint + 1);
            array[ptr] = nextPoint;
        }
        ptr += colCount;
    }
}

export function distanceTransform(array: NdArray, exponent?: 1 | 2 | typeof Infinity) {
    const dimensionCount = array.shape.length;
    const shape = array.shape.slice(0);
    const stride = new Array(dimensionCount);

    let size = 1,
        stackSize = 0,
        infinityHeight = 0,
        index: number,
        j: number,
        n: number,
        strideList: number[],
        tmp: NdArray<Float64Array<ArrayBufferLike>>,
        currentDimensionSize: number;
    exponent = exponent || 2;
    for (index = dimensionCount - 1; index >= 0; --index) {
        stride[index] = size;
        size *= shape[index];
        infinityHeight += shape[index];
        stackSize = Math.max(stackSize, shape[index]);
    }

    // Allocate scratch buffers
    const phase2ResultAllocation = pool.mallocDouble(size);
    const s_q = pool.mallocUint32(stackSize);
    const t_q = pool.mallocUint32(stackSize);
    let phase2ResultArray = ndarray(phase2ResultAllocation, shape.slice(0), stride.slice(0), 0);

    /**
     * For some insane reason cwise library refuse to run properly on production when it work fine on dev.
     * We have no other choice but to replicate the macro. We know for sure that we only need to deal with 2-dimension array so it will be fine.
     * */
    const phase1ResultAllocation = pool.mallocDouble(size);
    let phase1ResultArray = ndarray(phase1ResultAllocation, shape.slice(0), stride.slice(0), 0);
    for (let rowIndex = 0; rowIndex < array.shape[0]; rowIndex++) {
        for (let columnIndex = 0; columnIndex < array.shape[1]; columnIndex++) {
            phase1ResultArray.set(rowIndex, columnIndex, array.get(rowIndex, columnIndex) ? 0 : infinityHeight);
        }
    }
    //Perform first phase of distance transform
    phase1(phase1ResultArray.data, (size / shape[dimensionCount - 1]) | 0, shape[dimensionCount - 1] | 0);

    //Second passes
    for (index = dimensionCount - 1; index > 0; --index) {
        strideList = phase2ResultArray.stride;
        n = 1;
        for (j = index - 1; j < dimensionCount; ++j) {
            strideList[j] = n;
            n *= shape[j];
        }
        for (j = index - 2; j >= 0; --j) {
            strideList[j] = n;
            n *= shape[j];
        }
        ops.assign(phase2ResultArray, phase1ResultArray);

        //Execute phase 2
        currentDimensionSize = shape[index - 1];
        if (!isFinite(exponent)) {
            phase2_inf(phase2ResultArray.data, (size / currentDimensionSize) | 0, currentDimensionSize | 0, s_q, t_q);
        } else if (exponent === 1) {
            phase2_1(phase2ResultArray.data, (size / currentDimensionSize) | 0, currentDimensionSize | 0, s_q, t_q);
        } else if (exponent === 2) {
            phase2_2(phase2ResultArray.data, (size / currentDimensionSize) | 0, currentDimensionSize | 0, s_q, t_q);
        } else if (exponent < 1) {
            throw new Error('Values of exponent < 1 are not supported');
        } else {
            phase2_p(phase2ResultArray.data, (size / currentDimensionSize) | 0, currentDimensionSize | 0, s_q, t_q, exponent);
        }

        //Swap buffers
        tmp = phase1ResultArray;
        phase1ResultArray = phase2ResultArray;
        phase2ResultArray = tmp;
    }

    //Copy phase1ResultArray to result
    ops.assign(array, phase1ResultArray);

    pool.freeDouble(phase1ResultAllocation);
    pool.freeDouble(phase2ResultAllocation);
    pool.freeUint32(s_q);
    pool.freeUint32(t_q);
    return array;
}