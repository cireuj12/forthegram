import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
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

    handleDemo(e) {
        e.preventDefault();
        const demo = Object.assign({}, {username: "hello1", password: "hello1"});
        this.props.processForm(demo).then(() => this.props.history.push('/'));
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
            <div className="login-page">
                <div className="login-div">
                    <h1 className="instagram">FortheGram</h1>
                    <div className="login-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                                <div className="errors">{this.renderErrors()}</div> 
                        <div className="login-form">
                            <label>
                                <input type="text"
                                    value={this.state.username}
                                    placeholder="Username"
                                    onChange={this.update('username')}
                                    className="login-input" />
                            </label><br/>
                            <label>
                                <input type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.update('password')}
                                    className="login-input" />
                            </label><br/>
                            <input className="login-session-submit" type="submit" value="Log in" />
                        </div>
                        </form>
                    </div>
                    <div className="or-container">
                        <span className="or-text">OR</span>
                    </div>
                    <div className="login-form-container">
                        <form onSubmit={this.handleDemo} className="demo-box">
                            <div className="login-form">
                                <input className="demo-session-submit" type="submit" value="Demo Log in" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogInForm;