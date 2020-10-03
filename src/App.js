import React, { Component } from 'react'
import NavBar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import About from './About/About.js'
import Portfolio from './Portfolio/Portfolio.js'
import Footer from './Footer/Footer'
import './App.css'

export default class App extends Component  {
  render() {
    return (
      <main className='App'>
        <NavBar />
        <Intro />
        <About />
        <Portfolio />
        <footer>
          <Footer />
        </footer>  
      </main>
    );
  }
  
} 