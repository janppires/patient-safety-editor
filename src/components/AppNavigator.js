import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import HomePage from "./home/HomePage";
import TopicsPage from "./topics/TopicsPage";

import Layout from "./layout/Layout";

const AppNavigator = ({ history }) =>
  <ConnectedRouter history={history}>
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route path="/topics" component={TopicsPage} />
    </Layout>
  </ConnectedRouter>;

export default AppNavigator;
