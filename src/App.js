//import logo from './logo.svg';
import React from 'react'

import './App.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

function App() {


  return (
    <div>
      <div className="App">
      <Header headings="HELLO"></Header>
        <header className="App-header">
      <div className="container"><h1>Welcome All</h1></div>
      <div className="box1"><h2>Enjoy React</h2></div>
      <div> <Button color='red' text='Submit'></Button></div>
      </header>
      <Footer ftr='Akhila || 2023'></Footer>
      </div>
    </div>
  );
  
}
export default App;
