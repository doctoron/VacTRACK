import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
class Login extends Component {
    state = {
        email: '',
        // username: '',
        password: ''
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log("Login State:", this.setState);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const registerData = {
            email: this.state.email,
            // username: this.state.username,
            password: this.state.password
        }
        Axios.get('/api/members', registerData)
            .then(results => {
                console.log('Attempted Login:', results);
            })
            .catch(error => {
                console.log(error.response);
            })
        // cool API call 
        //     // USERNAME AND PASSWORD ARE CORRECT AND USER EXISTS
        //     this.setState({successfulLogin: true})
        // } else if () {
        //     // USERNAME EXIST
        //     this.setState({error: "Your password is incorrect"})
        // } else {
        //     // USERNAME DOESN'T EXIST
        //     this.setState({error: "Username doesn't exist"})
        // }
        // this.setState({ successfulLogin: true })
    }
    render () {
        const { username, password, successfulLogin } = this.state;
        if (successfulLogin) {
            return <Redirect to="/Search" />
        }
        return (
            <div className="modal show" tabindex="-1" role="dialog">
                <form onSubmit={this.handleSubmit}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login</h5>
                                <Link to="/" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </Link>
                            </div>
                            <div className="modal-body">
                                <input name="username" value={username} type="text" placeholder=" e-mail" onChange={this.handleChange} />
                                <input name="password" value={password} type="password" placeholder=" password" onChange={this.handleChange} />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <Link to="/" className="btn btn-secondary" data-dismiss="modal">Close</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
