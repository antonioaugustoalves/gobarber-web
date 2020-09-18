/* eslint-disable react/jsx-indent */
/* eslint-disable no-use-before-define */
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

// API de Contexto
import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
    <Router>
        <AppProvider>
            <Routes />
        </AppProvider>
        <GlobalStyle />
    </Router>
);

export default App;
