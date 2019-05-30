import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
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
        <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="errors">{this.renderErrors()}</div> 
            <div className="login-form">
                <label>Username:
                    <input type="text"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.update('username')}
                        className="login-input" />
                </label><br/>
                <label>Password:
                    <input type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                        className="login-input" />
                </label><br/>
                <input className="session-submit" type="submit" value="login" />
            </div>
            </form>
        </div>
        );
    }
}

export default LogInForm;