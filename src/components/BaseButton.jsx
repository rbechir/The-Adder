import React from 'react';

const BaseButton = ({id, value, onClick}) => {
    return (
        <React.Fragment>
            <button onClick={() => onClick(id)}>{value}</button>
            <br />
        </React.Fragment>
    );
}
 
export default BaseButton;