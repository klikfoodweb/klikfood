import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import AdminLayout from './admin/AdminLayout';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./components/DefaultLayout'),
  loading
});

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
		this.connecToServer = this.connecToServer.bind(this);
	}
	connecToServer() {
		fetch('/');
	}

	componentDidMount() {
		this.connecToServer();
	}

	render() {
	return (
		<div>
		  <BrowserRouter>
		      <Switch>
		        <Route path="/admin" name="Home" component={AdminLayout} />
		        <Route path="/" name="Home" component={DefaultLayout} />
		      </Switch>
		  </BrowserRouter>
		</div>
		);
	}
}

export default App;
