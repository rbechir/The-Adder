import React from 'react';

const getTotal = (time, name) => {
    const res = Object.keys(time)
        .map(id => time[id][name] ? parseInt(time[id][name]) : 0)
        .reduce((acc, cur) => acc + cur, 0);
    return (res ? res : 0);
}

const Total = (props) => {
    let total_right = getTotal(props.time, 'right');
    let total_left = getTotal(props.time, 'left') + Math.floor(total_right / props.base);
    total_right %= props.base;

    return (
        <h3>
            Total: {total_left.toString().padStart(2, '0')}
            {props.separator}
            {total_right.toString().padStart(2, '0')}
        </h3>
    );
}

export default Total;