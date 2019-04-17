// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './cmp/Nav';

import CreatePalette from './views/CreatePalette';
import MyPalettes from './views/MyPalettes';
import EditPalette from './views/EditPalette';

import './app.css';

class App extends React.Component {
    
    render() {
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route path = '/create-palette' component = {CreatePalette} />
                    <Route path = '/my-palettes' component = {MyPalettes} />
                    <Route path = '/edit-palette/:id' component = {EditPalette} />
                </Switch>
            </Router>
        )
    }
}

export default App;