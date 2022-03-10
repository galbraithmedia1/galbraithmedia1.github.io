
   
import React from 'react';
import backgroundVid from './assets/encore_bird (1080p).mp4'

import { Footer, Possibility, Features, WhatUNYTE, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
    <video loop autoPlay muted id='video' src= {backgroundVid}
          type="video/mp4">
        {/* <source
          src= {backgroundVid}
          type="video/mp4"
        /> */}
        Your browser does not support the video tag.
      </video>
      
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <WhatUNYTE />
    <Features />
    <Possibility />
    <CTA />
    {/* <Blog /> */}
    <Footer />
  </div>
);

export default App;

//test