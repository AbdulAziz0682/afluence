import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { useSelector } from 'react-redux';

import TopBar from '../components/TopBar';
import Home from './Home';
import Register from './Regiser';
import Account from './Account';
import Projects from './Projects';
import Login from './Login';
import Console from './Console';
import Test from './Test';

export default function Routes({children}){
    let loggedIn = useSelector(state => state.account.loggedIn);
    return (
        <BrowserRouter>
            <Grid container direction="column">
                <Grid item>
                    {loggedIn && <TopBar />}
                </Grid>
                <Grid container item style={{height: 'calc(100vh - 64px)'}} alignItems="center" justifyContent="center">
                    <Switch>
                        <Route exact path="/console"><Console /></Route>
                        <Route exact path="/login"><Login /></Route>
                        <Route exact path="/projects"><Projects /></Route>
                        <Route exact path="/account"><Account /></Route>
                        <Route exact path="/register"><Register /></Route>
                        <Route exact path="/test"><Test /></Route>
                        <Route exact path="/home"><Home /></Route>
                        <Route exact path="/"><Login /></Route>
                    </Switch>
                </Grid>
            </Grid>
        </BrowserRouter>
    )
}