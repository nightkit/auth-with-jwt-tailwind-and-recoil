import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';

// Imports
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Profile from './pages/Profile';

// Misc Imports
import About from './pages/About';
import SecuredPage from './pages/SecuredPage';
import UnsecredPage from './pages/UnsecuredPage';


function App() {
  return (
    <>
      <HelmetProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        >
        </ToastContainer>
          <Router>
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/unsecured-page" component={UnsecredPage} />
              <Route exact path="/secured-page" component={SecuredPage} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/" component={Home} />
              <Route path="*">No</Route>
            </Switch>
          </Router>
        
      </HelmetProvider>
    </>
  );
}

export default App;
