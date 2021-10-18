import React from 'react';
import './App.css';
import Student from "./components/student";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AddEditStudent from "./components/addEditStudent";

function App() {
  return (
    <div className="App">
        <h1>===================================================</h1>
        <Router>
            <Switch>
                <Route exact path='/students'>
                    <Student/>
                </Route>
                <Route exact path='/students/addEditStudent'>
                    <AddEditStudent/>
                </Route>
                <Route exact path='/'>
                    <Redirect to='/students'/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
