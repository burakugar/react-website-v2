import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Urunler from './components/pages/Urunler/Urunler';
import SignUp from './components/pages/SignUp/SignUp';
import Vision from './components/pages/Vision/Vision';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import ScrollToTop from './components/ScrollToTop';
import Communicate from './components/Communicate';
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/urunler' component={Urunler} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/vision' component={Vision} />
        <Route path='/contact-us' component={Communicate} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
