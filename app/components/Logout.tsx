import React from 'react';
import { useHistory } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Perform logout actions here, such as clearing user data from localStorage or session storage
    // For example, if using localStorage:
    localStorage.removeItem('userData');

    // Redirect to the login page
    history.push('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
