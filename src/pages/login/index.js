import React from 'react';

import {login, isAuth} from '../../services/auth'

import './styles.css';
import { Redirect, NavLink } from 'react-router-dom';

import {FaUserAlt, FaLock} from 'react-icons/fa';

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { email: '' , passwd: '', redirect: false};
    }
    formhandle = (event) => {
        event.preventDefault();
        login(this.state.email, this.state.passwd);
        if(isAuth(sessionStorage.getItem('authtoken'))){
            this.setState({redirect: '/app'});
        }else{
            alert("Usuário ou senha incorreto");            
        }
    }
    changeHandle = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    render() {
        if(this.state.redirect){
            return (
                <Redirect to={this.state.redirect} />
            )
        }else{
            return (
            <form id="login-form" onSubmit={this.formhandle}>
                <div className='inputwrap'>
                    <FaUserAlt />
                    <input type='text' name='email' placeholder='example@example.com' onChange={this.changeHandle} autoFocus/>
                </div>
                <div className='inputwrap'>
                    <FaLock />
                    <input type='password' name='passwd' placeholder='password' onChange={this.changeHandle}/>
                </div>
                <input type='submit' value='Log in' />
            </form>
        );
        }
    }
  }

const Login = () => (
    <div className="content">
        <div className="card">
            <h1>Login</h1>
            <LoginForm />
            <NavLink to='/register' className='link'>Register</NavLink>
        </div>
    </div>
);

export default Login;