import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import './App.css';
import Dashboard from './routes/dashboard/Dashboard';
import Activity from './components/Activity';
import SideBar from './components/navigation/SideBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return;

    axios.post('http://localhost:8000/api/auth/', null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      setIsLoggedIn(true);
      setUserUsername(response.data.username);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);


  return (
    <div className="App">
      <SideBar />
      {/* <Activity username="John" action="added" title="The Movie" list="watch later" date="March 28, 2023" /> */}
      {/* {isLoggedIn ? <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} /> : <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />} */}
    </div>
  );
}

export default App;
