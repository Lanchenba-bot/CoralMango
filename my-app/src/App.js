import React, { useState, useEffect } from 'react';
import Login from './Login';
import Table from './Table';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://coralmango.com/api/react-test');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Table data={data} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      {/* <Table data={data} /> */}
    </div>
  );
};

export default App;