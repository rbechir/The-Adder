import React, { Component } from 'react';
import '../css/Box.css'

class Box extends Component {
    handleChange = e => {
        const box = e.target.value;
        const separator = ` ${this.props.separator} `;
        const left = box.split(separator)[0];
        const right = box.split(separator)[1];
        this.props.onBoxChange(this.props.id, {
            id: this.props.box.id,
            left: left ? left : '',
            right: right ? right : ''
        });
    }

    render() {
        return (
            <React.Fragment>
                <input className='box'
                    type="text"
                    value={`${this.props.box.left} ${this.props.separator} ${this.props.box.right}`}
                    onChange={this.handleChange} />
                <button className='deleteBox'
                    onClick={() => this.props.onClick(this.props.id, this.props.box.id)}>
                    <strong>Delete</strong>
                </button>
                <br />
            </React.Fragment>
        );
    }
}

export default Box;