import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import ServiceDetail from './components/ServiceDetail';



function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/services/:id" component={ServiceDetail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
