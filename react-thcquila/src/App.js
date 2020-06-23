import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// components
import Navigation from './components/Navigation/Navigation';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return(
      <>
        <Navigation/>
        <Modal/>
        <Footer/>
      </>
    )
  }
}

export default App;
