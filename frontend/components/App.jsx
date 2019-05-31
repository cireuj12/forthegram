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
import { AuthRoute } from '../utils/route_util';
import { navBar } from './navbar/navbar';


const App = () => (
    <div className="App">
        <header>
        {/* <navBar /> */}
        <GreetingContainer />
        </header>
        <AuthRoute /*exact*/ path="/login" component={LogInFormContainer} />
        <AuthRoute /*exact*/ path="/signup" component={SignUpFormContainer} />
 
    </div>
);


export default App;
