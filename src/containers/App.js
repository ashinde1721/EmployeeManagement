import React from 'react';
import './App.scss';
import Layout from '../components/Layout/Layout';
import employees from './Employees/Employees';
import AddEmployees from './AddEmployee/AddEmployee';
import Error404 from '../components/Error404/index';
import { Route, Switch, Redirect, BrowserRouter as Router, } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/employee"/>
            )}/>
            <Route exact path="/employee" component={employees} />
            <Route path="/employee/add" component={AddEmployees} />
            <Route path="/employee/edit" component={AddEmployees} />
            <Route path="/error404" component={Error404} />
            <Redirect from="*" to="/error404" />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
