import React from "react";
import PropTypes from "prop-types";
import './dashboard.css';
import Header from '../../components/navigation/Header';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      {/* Add more components here */}
      <body className="dashboard-body">
        test
      </body>
    </div>
  );
};

Dashboard.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Dashboard;
