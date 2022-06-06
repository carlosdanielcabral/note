import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState({});

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const context = {
    authorized,
    setAuthorized,
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={context}>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
