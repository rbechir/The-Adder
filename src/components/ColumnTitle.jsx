import React from 'react';
import '../css/ColumnTitle.css';

const ColumnTitle = (props) => {
    return (
        <React.Fragment>
            <input className='inputTitle'
                type='text'
                placeholder='Title'
                value={props.value}
                onChange={e => props.onChange(props.id, e)} />
            <br />
        </React.Fragment>
    );
}

export default ColumnTitle;