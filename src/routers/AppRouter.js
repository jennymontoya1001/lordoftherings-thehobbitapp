import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { HobbitScreen } from '../components/HobbitScreen';
import { MovieScreen } from '../components/MovieScreen';
import { Navbar } from '../components/Navbar';
import { SeniorScreen } from '../components/SeniorScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch> 
                    <Route exact path="/senior" component={SeniorScreen} />
                    <Route exact path="/hobbit" component={HobbitScreen } />
                    <Route exact path="/movie/:id" component={MovieScreen } />
                    <Redirect to="/senior"/>
                </Switch>
                
            </div>
        </Router>
    )
}
