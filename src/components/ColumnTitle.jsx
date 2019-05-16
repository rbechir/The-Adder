import React from 'react';
import './ColumnTitle.css';

const ColumnTitle = ({ id, value, onChange }) => {
    return (
        <React.Fragment>
            <input className='inputTitle'
                type='text'
                placeholder='Title'
                value={value}
                onChange={e => onChange(id, e)} />
            <br />
        </React.Fragment>
    );
}

export default ColumnTitle;