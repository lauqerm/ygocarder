import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const defaultToolbar = [
    ['bold', 'italic'],
    ['image'],
    ['clean']
];
const allowedFormatList = [
    'bold', 'italic',
    'image',
];

export const InputRichText = () => {
    const reactQuillRef = useRef<ReactQuill>(null);
    const [value, setValue] = useState('test');
    const imageHandler = () => {
        // if (!reactQuillRef.current) return;

        // const editor = reactQuillRef.current.getEditor();
        // const range = editor.getSelection();
        // const value = prompt('Please enter the image URL');

        // if (value && range) {
        //     editor.insertEmbed(range.index, 'image', value, 'user');
        // }
    };

    return <div>
        <ReactQuill
            ref={reactQuillRef}
            theme="snow"
            value={value}
            onChange={setValue}
            formats={allowedFormatList}
            modules={{
                toolbar: {
                    container: defaultToolbar,
                    // handlers: {
                    //     image: imageHandler,
                    // },
                },
            }}
        />
    </div>;
};