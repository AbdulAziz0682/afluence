import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Routes from './routes';

import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import {create} from 'jss';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';

const customTheme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#1F2B36',
		},
		secondary: {
			main: '#ff004d',
			light: '#f1f1f1',
		},
	}
})

const jss = create({
	...jssPreset(),
	plugins: [...jssPreset().plugins, jssExtend(), rtl()],
	insertionPoint: document.getElementById('jss-insertion-point')
});

export default function App(){
	return (
		<StylesProvider jss={jss} generateClassName={createGenerateClassName()}>
			<ThemeProvider theme={customTheme}>
				<Routes />
			</ThemeProvider>
		</StylesProvider>
	)
}