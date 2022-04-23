
import { Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Note from './pages/Note';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Index } />
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Route path="/home" component={ Home } />
      <Route path="/note" component={ Note } />
    </Switch>
  );
}

export default App;
