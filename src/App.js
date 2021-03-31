
import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import Team from './components/pages/Team/Team'
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/services' component={ Services } />
        <Route path='/products' component={ Products } />
        <Route path='/sign-up' component={ SignUp } />
        <Route path='/team' component={ Team } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;