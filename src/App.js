
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
      <Home id="home"/>
      <Products id="products"/>
      <Services id="services"/>
      {/* <SignUp id="signup"/> */}
      <Team />
      <Footer />
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path='/' exact component={ Home } id="home"/>
//         <Route path='/services' component={ Services } id="services"/>
//         <Route path='/products' component={ Products } id="products"/>
//         <Route path='/sign-up' component={ SignUp } id="signup"/>
//         <Route path='/team' component={ Team } id="team"/>
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

export default App;