import React, { Component } from 'react';
import './assets/index.css';
import { Route } from 'react-router-dom';
import Home from './components/Layouts/Home';
import WebWhatsApp from './components/Layouts/WebWhatsApp';
import Faq from './components/Layouts/Faq';
import DetailInfo from './components/Layouts/Faq/DetailInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/webwhatsapp" component={WebWhatsApp}></Route>
            <Route exact path="/faq" component={Faq}></Route>
            <Route exact path="/faq/:id" component={DetailInfo}></Route>
      </div>
    );
  }
}

export default App;
