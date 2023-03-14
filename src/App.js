// import { useState } from 'react';
import './App.css';
// import Button from './components/general/Button.js';
import Input from './components/general/Input.js';
import SearchBar from './components/general/SearchBar.js';
import SelectInput from './components/general/SelectInput.js';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from './components/general/Button.js';

function App() {


  function setValue(e) {
    console.log(e.target.value);
  }

  function setTitle(e) {
    console.log(e.target.value);
  }

  return (
    <div className="App">

      <SearchBar title="Search" className="lightSearch" setTitle={setTitle} />
      <SearchBar title="Search" className="darkSearch" setTitle={setTitle} />
    </div>
  );
}

export default App;
