import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Servers from './Servers';
import Home from './Home';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route path='/'  exact={true}  component={Home} />
                    <Route path='/servers'  exact={true}  component={Servers} />
                </Switch>    
            </Router>   
         );
    }
}
 
export default App;