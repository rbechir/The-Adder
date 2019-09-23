import React from 'react';

const BaseButton = (props) => {
    return (
        <React.Fragment>
            <button onClick={() => props.onClick(props.id)}>{props.value}</button>
            <br />
        </React.Fragment>
    );
}

export default BaseButton;