import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Home from './Home';
import Register from './Regiser';

export default function Routes({children}){
    return (
        <BrowserRouter>
            <TopBar />
            <Switch>
                <Route exact path="/register"><Register /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
            {children}
        </BrowserRouter>
    )
}