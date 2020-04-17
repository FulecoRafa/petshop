import React from 'react';

import {registerUser} from '../../services/auth'

import DelayedRedirect from '../../components/DelayedRedirect';

import './styles.css';
import { NavLink } from 'react-router-dom';

let passwdObj = {
    passwd: '',
    passwd2: ''
}

class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        email: '' ,
        name: '',
        passwd: '',
        address: '',
        phone: '',
        error: '',
        redirect: false,
        match: 'passMismatch'};
    }
    formhandle = event => {
        event.preventDefault();
        let newUser = (({email, name, passwd, address, phone}) => (({email, name, passwd, address, phone})))(this.state);
        let response = registerUser(newUser);
        console.log(response);
        if(response){
            this.setState({error: response});
        }else{
            this.setState({redirect: '/login'});
        }
    }
    changeHandle = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    changeHandlePhone = event => {
        event.target.value = event.target.value.replace(/(\D|\s)/g, '');
        event.target.value = event.target.value.replace(/(\d{1,2})?(\d)?(\d{1,4})?(\d{1,4})?/mi, '($1) $2 $3-$4');
    }
    changeHandlePasswd = event => {
        passwdObj[event.target.name] = event.target.value;
        if(passwdObj.passwd === passwdObj.passwd2){
            this.setState({match: '', passwd:  passwdObj.passwd});
        }else{
            this.setState({match: 'passMismatch', passwd: ''});
        }
    }
    render() {
        if(this.state.redirect){
            return (
                <DelayedRedirect to={this.state.redirect} message="Cadastro realizado com sucesso!"/>
            )
        }else{
            return (
            <form id="login-form" onSubmit={this.formhandle}>
                <div className='inputwrap'>
                    <h3>Name:</h3>
                    <input type='text' name='name' onChange={this.changeHandle} placeholder='Full name' required autoFocus/>
                </div>
                <div className='inputwrap'>
                    <h3>Email address:</h3>
                    <input type='email' name='email' onChange={this.changeHandle} placeholder='example@example.com' required/>
                </div>
                <div className='inputwrap'>
                    <h3>Address:</h3>
                    <input type='text' name='address' onChange={this.changeHandle} placeholder='Florense Street, 23' required/>
                </div>
                <div className='inputwrap'>
                    <h3>Phone:</h3>
                    <input type='text' name='phone' onKeyPress={this.changeHandlePhone} pattern='[0-9\(\)\- ]{16}' placeholder='(DD) 9 XXXX-XXXX' required/>
                </div>
                <div className='inputwrap'>
                    <h3>Profile pic:</h3>
                    <input type='file' name='image' onChange={this.changeHandleImage} required/>
                </div>
                <div className='inputwrap'>
                    <h3>Password:</h3>
                    <input type='password' name='passwd' onKeyUp={this.changeHandlePasswd} min='6' required/>
                </div>
                <div className='inputwrap'>
                    <h3>Confirm Password:</h3>
                    <input type='password' name='passwd2' onKeyUp={this.changeHandlePasswd} className={this.state.match} required/>
                </div>
                <input type='submit' value='Register' />
                <p>{this.state.error}</p>
            </form>
        );
        }
    }
  }

const Register = () => (
    <div className="content">
        <div className="card">
            <h1>Register</h1>
            <RegisterForm />
            <NavLink to='/login' className='link'>Login</NavLink>
        </div>
    </div>
);

export default Register;