import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Register from './Regiser';

export default function Routes({children}){
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">register</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/register"><Register /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
            {children}
        </BrowserRouter>
    )
}