import React from 'react';

class DemoLogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleDemo = this.handleDemo.bind(this);
    };


    handleDemo(e) {
        e.preventDefault();
        const demo = Object.assign({}, { username: "hello1", password: "hello1" });
        this.props.processForm(demo);//.then(() => this.props.history.push('/'));
    }


    render() {
        return (

                    <div className="login-form-container">
                        <form onSubmit={this.handleDemo} className="demo-box">
                            <div className="login-form">
                                <input className="demo-session-submit" type="submit" value="Demo Log in" />
                            </div>
                        </form>
                    </div>
        );
    }
}

export default DemoLogInForm;