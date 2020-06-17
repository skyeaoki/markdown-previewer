import React from 'react';
import './Preview.css';

function Preview(props) {
    return (
        <div id="preview" className="preview" dangerouslySetInnerHTML={{ __html: props.html }}>
        </div>
    );
}

export default Preview;