import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';

// Imports
import Home from './pages/Home';
import Login from './pages/Login';
import Counter from './pages/Counter';

function App() {
  return (
    <>
    <RecoilRoot>
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
              <Route exact path="/counter" component={Counter} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route path="*">No</Route>
            </Switch>
          </Router>
        
      </HelmetProvider>
    </RecoilRoot>
    
    </>
  );
}

export default App;
