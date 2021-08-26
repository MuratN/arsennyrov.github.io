import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { Footer } from './layout/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    }
  }
  componentDidMount() {


  }


  render() {

    return (
      <>
        <Router>
          <Header />
 
            <Route exact path='/' component={Main} />
   {/*          <Route path='/basket' component={Basket} /> */}
 
          <Footer />
        </Router>
      </>
    );
  }
}

