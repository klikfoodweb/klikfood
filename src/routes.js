import React from 'react';
import DefaultLayout from './components/DefaultLayout';

import Home from './components/Home';

const routes = [
  { path: '/', exact: true, name: 'DefaultLayout', component: DefaultLayout },
  { path: '/home', name: 'Home', component: Home }
];

export default routes;
