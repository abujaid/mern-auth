import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import classnames from "classnames";

class Register extends Component
{
    constructor ()
    {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    componentDidMount ()
    {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps (nextProps)
    {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    onChange = e =>
    {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e =>
    {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);
    };
    render ()
    {
        const { errors } = this.state;
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="">
                                    <h4>
                                        <b>Register</b> below
                                    </h4>
                                </div>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.name}
                                            error={errors.name}
                                            id="name"
                                            type="text"
                                            className={classnames("form-control", {
                                                invalid: errors.name
                                            })}
                                        />
                                        <label htmlFor="name">Name</label>
                                        <p className="red-text">{errors.name}</p>

                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                            id="email"
                                            type="email"
                                            className={classnames("form-control", {
                                                invalid: errors.email
                                            })}
                                        />
                                        <label htmlFor="email">Email</label>
                                        <p className="red-text">{errors.email}</p>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            id="password"
                                            type="password"
                                            className={classnames("form-control", {
                                                invalid: errors.password
                                            })}
                                        />
                                        <label htmlFor="password">Password</label>
                                        <p className="red-text">{errors.password}</p>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password2}
                                            error={errors.password2}
                                            id="password2"
                                            type="password"
                                            className={classnames("form-control", {
                                                invalid: errors.password2
                                            })}
                                        />
                                        <label htmlFor="password2">Confirm Password</label>
                                        <p className="red-text">{errors.password2}</p>
                                    </div>
                                    <div className="">
                                        <button
                                            type="submit"
                                            className="btn btn-success"
                                        >
                                            Sign up
                                    </button>
                                        <span className="mr-5 grey-text text-darken-1">
                                            Already have an account? <Link to="/login">Log in</Link>
                                        </span>
                                    </div>
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
export default connect(mapStateToProps, { registerUser })(withRouter(Register));