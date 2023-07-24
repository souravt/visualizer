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
`;

function App() {

  const [pong, setPong] = useState("")
  const [messages, setMessages] = useState([])

  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  function clickMe() {  
    fetch('http://localhost:8081/ping', { method: 'GET' }) 
      .then(data => data.text())    
      .then(d => setPong(d)) 
      .catch(rejected => {
        console.log(rejected);
    });
  }

  function fetchMessages() {  
    fetch('http://localhost:8081/messages', { method: 'GET' }) 
      .then(res => res.json())    
      .then(d => setMessages(d)) 
      .catch(rejected => {
        console.log(rejected);
    });
  }

  function sendMessage() {  
    fetch('http://localhost:8081/message', { method: 'POST' }) 
      .then(res => res.json())    
     .catch(rejected => {
        console.log(rejected);
    });
  }
   

  return (
    <div className="App">
      <header >

      <div className="Ping">
          <Button onClick={clickMe}>Send a ping</Button> <p>{pong}</p>
        </div>  
        <div className="ViewMessage">
          <Button onClick={fetchMessages}>Fetch Messages</Button> 
          <center>
            {messages.map((dataObj, index) => {
              return (
                <div
                  style={{
                    width: "15em",
                    backgroundColor: "#35D841",
                    padding: 2,
                    borderRadius: 10,
                    marginBlock: 10,
                  }}
                >
                  <p style={{ fontSize: 20, color: 'white' }}>{dataObj.message}</p>
                  <p style={{ fontSize: 20, color: 'white' }}>{dataObj.id}</p>
                </div>
              );
            })}
      </center>
        </div>  

        <div className="SendMessage">       
          <form onSubmit={sendMessage()}>
            <label> Id: <input type="text" value={id}  /> </label>
            <label> Message: <input type="text" value={message}  /> </label>
            <input type="submit" value="Send" />
          </form>       
        </div>           
      </header>
    </div>
  );
}

export default App;
