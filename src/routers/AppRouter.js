import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import { HobbitScreen } from '../components/HobbitScreen';
import { SeniorScreen } from '../components/SeniorScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch> 
                    <Route path="/senior" component={SeniorScreen} />
                    <Route path="/hobbit" component={HobbitScreen } />
                </Switch>
            </div>
        </Router>
    )
}
