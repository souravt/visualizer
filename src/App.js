import './App.css';
import React, { useState } from "react";
import styled from "styled-components";

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@mui/material/Button';


import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';




function App() {

  const [pong, setPong] = useState('')
  const [messages, setMessages] = useState([])

  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const pages = ['Products', 'Pricing', 'Blog'];  

  const handleCloseNavMenu = () => {
    
  };

  

  function ping() {  
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
   
    <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>             

              <Box
                component="img"                
                alt="Tashumi Digital"
                src="tashumi.png"
              />

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>    
                  <Button key="Remote Monitoring" onClick={ping} color="inherit">Live View</Button>
                  <Button key="Reports" onClick={ping} color="inherit">Reports</Button>
                  <Button key="Administration" onClick={ping} color="inherit">Administration</Button>
                  <Button key="Alerts" onClick={ping} color="inherit">Alerts</Button>
                  <Button key="Ping" onClick={ping} color="inherit">Ping</Button>
                  <Button key="Send Message" onClick={sendMessage} color="inherit">Send Message</Button> 
                  <Button key="View Messages" onClick={fetchMessages} color="inherit">View Messages</Button>                   
              </Box>
            
          </Toolbar>
        </Container>
      </AppBar>

      <header >

      <div className="Ping">
          <Button onClick={ping}>Send a ping</Button> <p>{pong}</p>
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
