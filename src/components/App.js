import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home/Home.jsx';
import SavedBooks from './SavedBooks/SavedBooks';

class App extends Component {
    render() {
        return (
            
            <BrowserRouter>
                
                <Route exact path='/' component={Home} />
                <Route path='/saved' component={SavedBooks} />
            
            </BrowserRouter>
        )
    }
}

export default App;