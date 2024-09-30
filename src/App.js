import logo from './logo.svg';
import './App.css';
import { PageRoutes } from './PageRoutes';
import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';


export const SocketContext = React.createContext();

//Connect to our backend
const socket = io('http://localhost:3001');

function App() {

  const [isFirstUser, setIsFirstUser] = useState(null);
  
  useEffect(() => {
    // Listen for the user-status event, and set the isFirstUser bool
    socket.on('user-status', (data) => {
      setIsFirstUser(data.isFirstUser);
    });
  }, []);

  return(
    //Give routing component our context for the firstUser
    <SocketContext.Provider value={{ isFirstUser }}>
      <PageRoutes />
    </SocketContext.Provider>
  );

}

export default App;
