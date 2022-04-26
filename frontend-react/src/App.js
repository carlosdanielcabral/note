
import { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import api from './services/axiosAPI';
import AppContext from './context/AppContext';
import Index from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Note from './pages/Note';
import NotAuthorized from './pages/NotAuthorized';
import './App.css';

function App() {
  const { authorized, setAuthorized } = useContext(AppContext);
  useEffect(() => {
    const getAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) return false;
      try {
        const response = await api.get('/user', {
          headers: {
            authorization: token,
          }
        });
        setAuthorized(true);
      } catch (error) {
        console.log(error);
        setAuthorized(false);
      }
    }
    getAuth();
  }, [setAuthorized]);

  return (
    <Switch>
      <Route exact path="/" component={ Index } />
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Route path="/home" render={ () =>
        authorized ? <Home /> : <NotAuthorized /> 
      }/>
      <Route path="/note" render={ () => authorized ? <Note /> : <NotAuthorized /> } />
    </Switch>
  );
}

export default App;
