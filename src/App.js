import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './comnponents/Home/Home';
import Signup from './comnponents/Signup/Signup';
import Login from './comnponents/Login/Login';
import Header from './comnponents/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Profile from './comnponents/Profile/Profile';
import PrivateRoute from './comnponents/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
