
import React from 'react';
import './App.css';
import Blog from './components/pages/blog/Blog';
import BlogPage from './components/pages/blog/BlogPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Index from './components/Index';


function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={ Index } />
          <Route path="/blog" exact component={ Blog } />
          <Route path="/blog/post/:slug" component={ BlogPage }/>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;