import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/' component={Services} />
            <Route path='/' component={Products} />
            <Route path='/' component={SignUp} />
          </Switch>
          <ScrollToTop />
          <Footer />
      </Router>
        
    
  );
}

export default App;
