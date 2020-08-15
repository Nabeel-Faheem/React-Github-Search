import React, { useState } from 'react';
import './App.css';

// custom imports
import Navbar from './components/Navbar';
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';
import PropTypes from 'prop-types';
import GithubState from './context/github/githubState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = ( props ) =>  {

  const [ users, setUsers ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ alert, setAlert ] = useState(false);

  // clearusers handler action
  const clearUsersHandler = () => {
    setUsers([]);
    setLoading(false);
  }

  // show alert handler action
  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          { alert ? (<Alert />) : null }
          <Switch>
            <Route exact path="/" render={ ( props ) => {
              return (
                <React.Fragment>
                  <Search 
                    clearUsers={ clearUsersHandler }
                    areUsersClear={ users.length > 0 ? false : true }
                    showAlert={ showAlert }
                  />
                  <Users />
                </React.Fragment>
              );
            } }  />
            <Route path="/about" component={ About } />
          </Switch>
        </div>
      </Router>
    </GithubState>

  );

}

// props validation
App.propTypes = {
  users: PropTypes.array,
  loading: PropTypes.bool,
};

export default App;
