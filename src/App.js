import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import AdminLayout from './admin/AdminLayout';
import PaginationControl from './components/PaginationControl';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./components/DefaultLayout'),
  loading
});

// const Register = Loadable({
//   loader: () => import('./components/Register'),
//   loading
// });

class App extends Component {
  render() {
    return (
      <div>
		  <BrowserRouter>
		      <Switch>
		        <Route exact path="/testing" name="Testing Page" component={PaginationControl} />
		        <Route path="/admin" name="Home" component={AdminLayout} />
		        <Route path="/" name="Home" component={DefaultLayout} />
		      </Switch>
		  </BrowserRouter>
      </div>
    );
  }
}

export default App;
