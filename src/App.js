
import React from 'react';
import './App.css';
import Blog from './components/pages/blog/Blog';
import BlogPage from './components/pages/blog/BlogPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/pages/home/Index';
import Shop from './components/pages/Shop/Shop';
import IndexDashboard from './components/pages/dashboard/index'

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route path="/" exact component={ Index } />
            <Route path="/blog" exact component={ Blog } />
            <Route path="/blog/post/:slug" component={ BlogPage }/>
            <Route path="/shop" component={ Shop }  />
            <Route path="/dashboard" component={ IndexDashboard } />
          </Switch>
      </Router>
    </div>
  );
}

export default App;