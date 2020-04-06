import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './HomePage';
import TeamPage from './TeamPage';

const App: React.FunctionComponent<{}> = () => (
  <div className="App">
    <div className="appContainer" >
      <Route path='/' component={HomePage} exact />
      <Route path='/team/:team_name' component={TeamPage} />
    </div>
  </div>
)

export default App;