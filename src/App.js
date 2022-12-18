
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import ServiceDetail from './components/ServiceDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


//styled components
// import { StyledContainer } from './components/Styles';

function App() {
  return (
    <>
      
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/services/:id" component={ServiceDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
      
    </>
  );
}

export default App;
