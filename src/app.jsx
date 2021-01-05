import React, { Component } from 'react';
import Navigation from './component/navigation';
import {Route, Switch} from 'react-router-dom';
import Home from './component/home';
import Help from './component/help';
import Admin from './component/admin';
import Items from './component/items';
import Product from './component/items';


class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Navigation />
                <Switch>
                
                <Route  path="/home" exact component={Home}/>
                <Route  path="/help" exact component={Help}/>
                <Route  path="/admin" exact component={Admin}/>
                <Route path="/shopping" exact render={(props)=><Items data="shoes" {...props }/>}/>
                <Route  path="/items/:id" exact component={Product}/>
                </Switch>
            </React.Fragment>
        ) 
    }
};
export default App;
