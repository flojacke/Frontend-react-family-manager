import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListPersonComponent from './components/ListPersonComponent';
import UpdatePersonComponent from './components/UpdatePersonComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
            <Switch> 
                <Route path="/" exact component = {ListPersonComponent}></Route>
                <Route path="/personlist" component = {ListPersonComponent}><ListPersonComponent /></Route>
                <Route path="/update-person/:id" component={UpdatePersonComponent}></Route>
            </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
