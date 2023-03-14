import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Input from './components/general/Input';
// import SelectInput from './components/general/SelectInput';
// import Button from './components/general/Button';
// import SearchBar from './components/general/SearchBar';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import Dashboard from './components/dashboard/Dashboard';
// import Authentication from './components/authentication/Authentication';
import Login from './routes/auth/Login';
import Authentication from './routes/auth/Authentication';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  function setValue(e) {
    console.log(e.target.value);
  }

  function setTitle(e) {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      {/* <Login setValue={setValue} setTitle={setTitle} /> */}
      <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
    </div>
  );
}

export default App;
