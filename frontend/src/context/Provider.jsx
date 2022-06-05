import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState({});

  const context = useMemo(() => ({
    authorized,
    setAuthorized,
    user,
    setUser,
  }), []);

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
