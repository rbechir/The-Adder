import React from 'react';
import '../css/Separator.css';

const Separator = (props) => {
    return (
        <input className='inputSeparator'
            placeholder='Separator'
            value={props.value}
            onChange={e => props.onChange(props.id, e)} />
    );
}

export default Separator;