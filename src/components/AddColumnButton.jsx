import React from 'react';
import './AddColumnButton.css'

const AddColumnButton = ({ onClick, value }) => {
    return (
        <React.Fragment>
            <button className='addButton'
                onClick={onClick}>
                <strong>{value}</strong>
            </button>
        </React.Fragment>
    );
}

export default AddColumnButton;