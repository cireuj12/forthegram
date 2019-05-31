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
import SplashContainer from './splash/splash_container';


const App = () => (
    <div className="App">
        <header>
        {/* <navBar /> */}
        <GreetingContainer />
        <Switch>    
                <Route exact path='/' component={SplashContainer} />
                <AuthRoute /*exact*/ path="/login" component={LogInFormContainer} />
                <AuthRoute /*exact*/ path="/signup" component={SplashContainer} />
        </Switch>
        </header>
            {/* are the switches even neccesary? */}
        
    </div>
);


export default App;
