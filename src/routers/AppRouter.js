import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import { HobbitScreen } from '../components/HobbitScreen';
import { Navbar } from '../components/Navbar';
import { SeniorScreen } from '../components/SeniorScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch> 
                    <Route path="/senior" component={SeniorScreen} />
                    <Route path="/hobbit" component={HobbitScreen } />
                </Switch>
            </div>
        </Router>
    )
}
