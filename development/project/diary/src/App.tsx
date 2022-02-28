import React, { useState } from 'react';
import './App.css';
import './Common.css';
import { Reset } from 'styled-reset';
import Header from './Header';
import Footer from './Footer';
import Container from './Container'

function App() {
  return (
    <>
      <Reset />
      <div className="App">
        <Header />
        <Container />
        <Footer />
      </div>
    </>
  );
}

export default App;
