import React from 'react';

import { Redirect } from 'react-router-dom';

class DelayedRedirect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            message: props.message,
            to: props.to
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({redirect: true});
        }, 2000);
    }

    render() {
        if(this.state.redirect){
            return(<Redirect to={this.state.to} />);
        }else{
            return(
                <div className="content">
                    <div className="card">
                        <h2>{this.state.message}</h2>
                    </div>
                </div>
            )
        }
    }
}

export default DelayedRedirect;