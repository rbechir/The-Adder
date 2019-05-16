import React from 'react';

const AddLineButton = ({id, onClick, value}) => {
    return (
        <React.Fragment>
            <button onClick={() => onClick(id)}>{value}</button>
        </React.Fragment>
    );
}

export default AddLineButton;