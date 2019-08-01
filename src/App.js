import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import * as Routers from './router'

import './App.css'
import Home from './pages/home'
import Page2 from './pages/page2'

function App() {
    return (
        <div className="App">
            <Router>
                <Link to="/home">首页</Link>
                <Link to="/page2">page2</Link>

                <Route path="/" exact component={Home} />
                <Route path={Routers.home} component={Home} />
                <Route path={Routers.page2} component={Page2} />
            </Router>
        </div>
    )
}

export default App
