import React from 'react';

const AddLineButton = (props) => {
    return (
        <button onClick={() => props.onClick(props.id)}>{props.value}</button>
    );
}

export default AddLineButton;