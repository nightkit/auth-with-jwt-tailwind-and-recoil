import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ToastProvider } from 'react-toast-notifications';

// Imports
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
    <HelmetProvider>
      <ToastProvider
        autoDismiss={true}
        autoDismissTimeout={6000}
      >
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route path="*">No</Route>
          </Switch>
        </Router>
      </ToastProvider>
    </HelmetProvider>
    
    </>
  );
}

export default App;
