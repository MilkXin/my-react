import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from 'antd'
import logo from './logo.svg';
import './App.css';
import Page1 from './pages/page1'
import Page2 from './pages/page2'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Link to="/"><Button type="primary">首页</Button></Link>
        <Link to="/page1"><Button>page1</Button></Link>
        <Link to="/page2"><Button>page2</Button></Link>

        <Route path="/" exact component={Page1} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Router>
    </div>
  );
}

export default App;
