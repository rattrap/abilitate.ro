import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import Hero from './components/Hero/index';
import JobList from './components/JobList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <JobList />
        <Footer />
      </div>
    );
  }
}

export default App;
