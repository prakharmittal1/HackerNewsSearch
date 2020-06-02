import React, { Component } from 'react';
import Header from './components/layout/Header';
import HackerNews from './components/HackerNews';

class App extends Component { 
  render() {
    return (
      <div className="App">

        <Header />
      </div>
    );
  }
}

export default App;