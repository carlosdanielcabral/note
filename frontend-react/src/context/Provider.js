import React, { useState } from 'react';
import AppContext from './AppContext';

const Provider = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  
  const context = {
    authorized,
    setAuthorized,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  )
}

export default Provider;
