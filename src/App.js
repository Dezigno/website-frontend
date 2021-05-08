
import React from 'react';
import './App.css';
import Blog from './components/pages/blog/Blog';
import BlogPage from './components/pages/blog/BlogPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Index from './components/Index';


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Home id="home"/>
//       <Products id="products"/>
//       <Services id="services"/>
//       {/* <SignUp id="signup"/> */}
//       <Team />
//       <Footer />
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={ Index } />
          <Route path="/blog" exact component={ Blog } />
          <Route path="/blog/:slug" component={ BlogPage }/>
        </Switch>
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