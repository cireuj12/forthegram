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
import SplashContainer from './splash/splash_container';


const App = () => (
    <div className="App">
        <header>
        <GreetingContainer />
        </header>
            {/* are the switches even neccesary? */}

        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <AuthRoute /*exact*/ path="/login" component={LogInFormContainer} />
            <AuthRoute /*exact*/ path="/signup" component={SplashContainer} />
        </Switch>
  
    <div className="footer">  
        <div><a>LinkedIn</a></div>
        <div><a>Website</a></div>
        <div><a>GitHub</a></div>
        <div><a>Instagram</a></div>
    </div>
    </div>
);


export default App;
