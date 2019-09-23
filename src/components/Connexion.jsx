import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import base from '../base';
import '../css/Connexion.css'
import Title from './Title';

class Connexion extends Component {
    state = {
        tmp_pseudo: '',
        tmp_password: '',
        ids: {
            init: {
                pseudo: '',
                password: ''
            }
        },
        new_user: true,
        valid: false
    }

    handleChange = (e, name) => {
        this.setState({
            [name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        let new_user = true;
        Object.keys(this.state.ids).map((id) => {
            if (bcrypt.compareSync(this.state.tmp_pseudo, this.state.ids[id].pseudo)) {
                new_user = false;
                this.setState({ new_user });
                if (bcrypt.compareSync(this.state.tmp_password, this.state.ids[id].password)) {
                    this.setState({
                        tmp_pseudo: this.state.ids[id].pseudo,
                        valid: true
                    });
                } else {
                    this.setState({ tmp_password: '' });
                }
            }
        });
        if (new_user) {
            let ids = { ...this.state.ids }
            const id = Date.now();
            let pseudoH = bcrypt.hashSync(this.state.tmp_pseudo, 10)
            ids[id] = {
                pseudo: pseudoH,
                password: bcrypt.hashSync(this.state.tmp_password, 10)
            }
            this.setState({
                tmp_pseudo: pseudoH,
                ids,
                valid: true
            });
        }
    }

    componentDidMount() {
        this.ref = base.syncState(`/ids`, {
            context: this,
            state: 'ids'
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    render() {
        if (this.state.valid) {
            const pseudo = this.state.tmp_pseudo.replace(/[#\/\.\$\[\]]/g, '');
            return (
                <Redirect push to={`/pseudo/${pseudo}`} />
            )
        }

        return (
            <div className='containerLogin'>
                <div className='titleLogin'>
                    <Title value='The Adder' />
                </div>
                <form className='formLogin'
                    onSubmit={this.handleSubmit}>
                    <input className="inputLogin"
                        placeholder='Pseudo'
                        type='text'
                        value={this.state.tmp_pseudo}
                        onChange={e => this.handleChange(e, 'tmp_pseudo')}
                        required />
                    <input className="inputLogin"
                        placeholder='Password'
                        type='password'
                        value={this.state.tmp_password}
                        onChange={e => this.handleChange(e, 'tmp_password')}
                        required />
                    <button className='buttonLogin'
                        type='submit'>
                        <strong>Connect</strong>
                    </button>
                </form>
            </div>
        );
    }
}

export default Connexion;
