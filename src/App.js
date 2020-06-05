import React, {Component } from 'react';
import Header from './components/layout/Header';
import { Button } from '@material-ui/core'
import SearchBar from './components/SearchBar';
import DropDown from './components/DropDown'


export default class App extends Component { 
  render() {
    return (
      <div className="App">
        <Header />
        <Button color="primary" variant="outlined">This is a Button</Button>
        <SearchBar />
        <DropDown />
      </div>
    );
  }
}
