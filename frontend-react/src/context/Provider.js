import React, { useState } from 'react';
import AppContext from './AppContext';

const Provider = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState({});
  
  const context = {
    authorized,
    setAuthorized,
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  )
}

export default Provider;
