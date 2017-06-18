import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from '../Home';
import TopicsEditor from '../TopicsEditor';

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/edit" component={TopicsEditor}/>
    </div>
  </Router>
)

export default AppRouter;