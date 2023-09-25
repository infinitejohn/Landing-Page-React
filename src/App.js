import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer} from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <Router>
          <GlobalStyles />
          
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
          <ScrollToTop />
          <Footer />
      </Router>
    </ChakraProvider>
    
    
  );
}

export default App;
