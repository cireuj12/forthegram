import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './user_form/signup_form_container';
import LogInFormContainer from './user_form/login_form_container';


const App = () => (
    <div className="App">
        <header>
        <h1>FortheGram via App</h1>
        <GreetingContainer />
        </header>
        <Route path="/login" component={LogInFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
 
    </div>
);

export default App;
