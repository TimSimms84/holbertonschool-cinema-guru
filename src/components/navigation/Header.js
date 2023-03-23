// src/components/navigation/Header.js
import React from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="header-nav">
      <h1>Cinema Guru</h1>
      <div className="user-section">
        <img className="avatar" src="https://picsum.photos/100/100" alt="User avatar" />
        <p className='welcome'>Welcome, {userUsername}!</p>
        <span className="logout-icon" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </span>
      </div>
    </nav>
  );
};

export default Header;
