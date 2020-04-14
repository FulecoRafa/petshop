import React from 'react';
import {isAuth} from './services/auth';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/header';

import Home from './pages/home';
import Login from './pages/login';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuth(sessionStorage.getItem('authtoken'))? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', from: props.location}} />
        )
    )}/>
)

const HomePage = () => {
    return(
    <div id='page'>
        <Header />
        <Home />
    </div>
    );
}

const LoginPage = () => {
    return(
    <div id='page'>
        <Header />
        <Login />
    </div>
    );
}

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path='/login' component={LoginPage} />
            <PrivateRoute exact path='/app' component={() => (<h1>Logged in!</h1>)} />
        </Switch>
    </BrowserRouter>
);

export default Routes;