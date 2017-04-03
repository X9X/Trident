import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import HelloWorld from './containers/HelloWorld';
import MusicList from './components/MusicList';

import FuelSavingsPage from './containers/FuelSavingsPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="hello-world" component={HelloWorld}/>
    <Route path="music-list" component={MusicList}/>
    <Route path="demo" component={FuelSavingsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
