import React from 'react';
import './Separator.css';

const Separator = ({id, value, onChange}) => {
    return (
        <React.Fragment>
            <input className='inputSeparator'
                placeholder='Separator'
                value={value}
                onChange={e => onChange(id, e)} />
        </React.Fragment>
    );
}
 
export default Separator;