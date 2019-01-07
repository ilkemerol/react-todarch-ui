import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import $ from "jquery";
import '../css/custom.css';

class LoginForm extends React.Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        pass: "",
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    componentDidMount() {
        $('.toggle').click(function () {
            $(this).children('i').toggleClass('fa-pencil');
            $('.form').animate({
                height: "toggle",
                'padding-top': 'toggle',
                'padding-bottom': 'toggle',
                opacity: "toggle"
            }, "slow");
        });
    }

    render() {
        return (
            <div className="z-depth-5 rounded module form-module">
                <div className="toggle">
                    <i className="fa fa-times fa-pencil" />
                    {/*<div className="tooltip">Sign Up Here!</div>*/}
                </div>
                <div className="form">
                    <h2>Login to your account</h2>
                    <form className="needs-validation" onSubmit={this.submitHandler} noValidate>
                        <MDBRow>
                            <MDBCol md="12" className="mb-3">
                                <input value={this.state.email} onChange={this.changeHandler} type="email" id="defaultFormRegisterConfirmEx3" className="form-control" name="email" placeholder="Your Email address" required />
                                <div className="invalid-feedback">
                                    Please provide a valid email.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>
                            <MDBCol md="12" className="mb-3">
                                <input value={this.state.pass} onChange={this.changeHandler} type="password" id="defaultFormRegisterPasswordEx4" className="form-control" name="pass" placeholder="Password" required />
                                <div className="invalid-feedback">
                                    Please provide a valid password.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>
                        </MDBRow>
                        <MDBBtn outline color="primary" type="submit">
                            Login
                        </MDBBtn>
                    </form>
                </div>
                <div className="form">
                    <h2>Create an account</h2>
                    <form className="needs-validation" onSubmit={this.submitHandler} noValidate>
                        <MDBRow>
                            <MDBCol md="6" className="mb-3">
                                <input value={this.state.fname} name="fname" onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx" className="form-control" placeholder="First name" required />
                                <div className="invalid-feedback">
                                    Please provide a valid name.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>
                            <MDBCol md="6" className="mb-3">
                                <input value={this.state.lname} name="lname" onChange={this.changeHandler} type="text" id="defaultFormRegisterEmailEx2" className="form-control" placeholder="Last name" required />
                                <div className="invalid-feedback">
                                    Please provide a valid last name.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6" className="mb-3">
                                <input value={this.state.email} onChange={this.changeHandler} type="email" id="defaultFormRegisterConfirmEx3" className="form-control" name="email" placeholder="Your Email address" required />
                                <div className="invalid-feedback">
                                    Please provide a valid email.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </MDBCol>
                            <MDBCol md="6" className="mb-3">
                                <input value={this.state.pass} onChange={this.changeHandler} type="password" id="defaultFormRegisterPasswordEx4" className="form-control" name="pass" placeholder="Password" required />
                                <div className="invalid-feedback">
                                    Please provide a valid password.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>
                        </MDBRow>
                        <MDBCol md="12" className="mb-3">
                            <div className="custom-control custom-checkbox pl-3">
                                <input className="custom-control-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="custom-control-label text-muted" htmlFor="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </MDBCol>
                        <MDBBtn outline color="primary" type="submit">
                            Submit Form
                        </MDBBtn>
                    </form>
                </div>
                <div className="cta">
                    <a href="/#">Forgot your password?</a>
                </div>
            </div>
        )
    }
}

export default LoginForm;