import React from 'react';
import '../css/AddColumnButton.css'

const AddColumnButton = (props) => {
    return (
        <button className='addButton'
            onClick={props.onClick}>
            <strong>{props.value}</strong>
        </button>
    );
}

export default AddColumnButton;