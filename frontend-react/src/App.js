
import { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import api from './services/axiosAPI';
import AppContext from './context/AppContext';
import Index from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import New from './pages/Note/New';
import View from './pages/Note/View';
import NotAuthorized from './pages/NotAuthorized';
import './App.css';

function App() {
  const { authorized, setAuthorized, setUser } = useContext(AppContext);
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
        setUser(response.data);
        setAuthorized(true);
      } catch (error) {
        console.log(error);
        setAuthorized(false);
      }
    }
    getAuth();
  }, [setAuthorized, setUser]);

  return (
    <Switch>
      <Route exact path="/" component={ Index } />
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Route path="/home" render={ () =>
        authorized ? <Home /> : <NotAuthorized /> 
      }/>
      <Route path="/note/new" render={ () => authorized ? <New /> : <NotAuthorized /> } />
      <Route path="/note/:id" render={ () => authorized ? <View /> : <NotAuthorized /> } />
    </Switch>
  );
}

export default App;
