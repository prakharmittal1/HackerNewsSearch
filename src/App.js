import React from 'react';
import './App.css';
import { ActionBar } from './components/ActionBar';
import { Header } from './components/Header';

export class App extends React.Component {

  render(){
    return (
      <div>
        <Header />
        <ActionBar />

      </div>
    )
  }
}