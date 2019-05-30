import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            fullname: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <div className="errors">{this.renderErrors()}</div> 
                    <div className="signup-form">
                        <label>
                    <input type="text"
                                value={this.state.username}
                                placeholder="Username"
                                onChange={this.update('username')}
                                className="signup-input" />
                        </label><br />
                        <label>
                    <input type="text"
                                value={this.state.fullname}
                                placeholder="Full Name"
                                onChange={this.update('fullname')}
                                className="signup-input" />
                        </label><br />
                        <label>
                    <input type="text"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.update('email')}
                                className="signup-input" />
                        </label><br />
                        <label>
                    <input type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update('password')}
                                className="signup-input" />
                        </label><br />
                        <input className="session-submit" type="submit" value="Sign up" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;