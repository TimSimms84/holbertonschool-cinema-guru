import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './components/dashboard/Dashboard';
import Authentication from './components/authentication/Authentication';
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
      {isLoggedIn
        ? <Dashboard username={userUsername} />
        : <Authentication />
      }
{/* 
      <Input label="Username" type="text" className="whiteInput" setValue={setValue} placeholder="name" icon={faUser}/>
      <Input label="Min Date" type="number" className="blackInput" setValue={setValue} icon={"user"} />

      <SelectInput label="Select" className="whiteSelect" setValue={setValue} options={[{ value: "1", label: "One" }, { value: "2", label: "Two" }, { value: "3", label: "Three" }]} />
      <SelectInput label="Select" className="blackSelect" setValue={setValue} options={[{ value: "1", label: "One" }, { value: "2", label: "Two" }, { value: "3", label: "Three" }]} />

      <Button label="Load More..." className="squareButton" />
      <Button label="Drama" className="roundButton" />

      <SearchBar title="Search" className="lightSearch" setTitle={setTitle} />
      <SearchBar title="Search" className="darkSearch" setTitle={setTitle} /> */}
    </div>
  );
}

export default App;
