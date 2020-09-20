import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;