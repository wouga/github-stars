import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import './App.css';
import { Header } from './components/header';
import { MenuBar } from './components/menu-bar';
import { Content } from './components/content';

function App() {
    const [isOpenBar, setIsOpenBar] = useState(true);
    const openBar = () => setIsOpenBar(true);
    const closeBar = () => setIsOpenBar(false);

    return (
        <Router>
            <div className="app">
                <CssBaseline />
                <Header isOpenBar={isOpenBar} onOpenBarClick={openBar} />
                <MenuBar isOpenBar={isOpenBar} onCloseBarClick={closeBar} />
                <Content />
            </div>
        </Router>
    );
}

export default App;
