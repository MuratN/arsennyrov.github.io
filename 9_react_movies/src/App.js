import React, { Component } from 'react';

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
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

