import './App.css';
import React, { useState } from "react";
import { useMemo } from "react";
import styled from "styled-components";

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@mui/material/Button';
import GoogleMapReact from 'google-map-react';
import MarkerF from 'google-map-react';
import StreetViewPanorama from 'google-map-react';


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
  
  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  
  const center = useMemo(() => ({ lat: 7.4192661, lng: 3.8761708 }), []);
   

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
                  <Button key="Live View" onClick={ping} color="inherit">Live View</Button>
                  <Button key="Alerts" onClick={ping} color="inherit">Alerts</Button>
                  <Button key="Reports" onClick={ping} color="inherit">Reports</Button>  
                  <Button key="Admin" onClick={ping} color="inherit">Administration</Button>
                  <Button key="Ping" onClick={ping} color="inherit">Liveness Probe</Button>
                  <Button key="Send Message" onClick={sendMessage} color="inherit">Send Message</Button> 
                  <Button key="View Messages" onClick={fetchMessages} color="inherit">View Messages</Button>                   
              </Box>
            
          </Toolbar>
        </Container>
      </AppBar>

      <header > </header>

      <body>

      <div className="Ping">
      <p> <Button onClick={ping}>Send a ping</Button> : {pong}</p>
        </div>  
        <div className="ViewMessage">
          <Button onClick={fetchMessages}>Fetch Messages</Button> 
          <center>
            {messages.map((dataObj, index) => {
              return (
                
                <div
                  style={{
                    width: "40em",
                    backgroundColor: "#35D841",
                    padding: 2,
                    borderRadius: 10,
                    marginBlock: 10,
                  }}
                >
                  <p style={{ fontSize: 20, color: 'white' }}>ID : {dataObj.id} Message : {dataObj.message}</p>
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

       <p></p>

        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyC-6Da6COS02HCn3RbbOkrzb25V8jQd_Io' }}
            defaultCenter={{lat: 12.9716, lng: 77.594566}}
            defaultZoom={15}
          >
             
          </GoogleMapReact>
        </div> 

      </body>
      
    </div>

    
  );
}

export default App;

