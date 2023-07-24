import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #3f51b5;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ad1457;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

function clickMe() {
  fetch('http://localhost:8081/ping', { method: 'GET' }) 
    .then(data => data.text())    
    .then(json => alert(json)) 
    .catch(rejected => {
      console.log(rejected);
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button onClick={clickMe}>Send Message</Button>
        </div>      
      
        <p>
          View Messages
        </p>

        <p>
          Send a ping
        </p>
        
      </header>
    </div>
  );
}

export default App;
