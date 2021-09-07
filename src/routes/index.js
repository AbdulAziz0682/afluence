import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import TopBar from '../components/TopBar';
import Home from './Home';
import Register from './Regiser';
import Account from './Account';

export default function Routes({children}){
    return (
        <BrowserRouter>
            <Grid container direction="column">
                <Grid item>
                    <TopBar />
                </Grid>
                <Grid item className="flex justify-center">
                    <Switch>
                        <Route exact path="/account"><Account /></Route>
                        <Route exact path="/register"><Register /></Route>
                        <Route path="/"><Home /></Route>
                    </Switch>
                </Grid>
            </Grid>
        </BrowserRouter>
    )
}