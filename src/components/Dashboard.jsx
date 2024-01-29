import React from 'react';

const Dashboard = ({ user, onLogout }) => (
  <div className="dashboard-container">
    <h1>Welcome to the Dashboard, {user?.username}!</h1>
    <button onClick={onLogout}>Logout</button>
  </div>
);

export default Dashboard;