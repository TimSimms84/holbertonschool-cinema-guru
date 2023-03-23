import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropTypes from "prop-types";
import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <BrowserRouter>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <SideBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Routes>
    </BrowserRouter>
  )
};

Dashboard.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Dashboard;
