import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from '../../actions/authActions'
// import classnames from 'classnames'

class Login extends Component
{
    constructor ()
    {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    componentDidMount ()
    {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }
    componentWillReceiveProps (nextProps)
    {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    onChange = e =>
    {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e =>
    {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    };
    render ()
    {
        const { errors } = this.state;
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <form noValidate action="" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>

                                        <input type="email" className="form-control"
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                            id="email"
                                        />
                                        <span className="red-text">{errors.email}{errors.emailnotfound}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>

                                        <input type="password" className="form-control"
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            id="password"
                                        />
                                        <p className="red-text">{errors.password}{errors.passwordincorrect}</p>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                    <p className="grey-text text-darken-1">
                                        Don't have an account? <Link to="/register">Register</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>
{
    return {
        auth: state.auth,
        errors: state.errors
    }
}
export default connect(mapStateToProps, { loginUser })(Login);