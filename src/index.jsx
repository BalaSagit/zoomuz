import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Base from './components/Base.jsx';
import './styles/global.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <Base />
    </MuiThemeProvider>,
    document.getElementById('root')
);