import React from 'react';
import './Editor.css';

function Editor(props) {
    return (
        <textarea id="editor" className="editor" onChange={props.onChange} value={props.text}>
        </textarea >
    );
}

export default Editor;