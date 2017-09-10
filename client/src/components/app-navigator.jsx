import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import HomePage from "./pages/home";
import CategoriesPage from "./pages/categories";

import Layout from "components/layout";

const AppNavigator = ({ history }) =>
  <ConnectedRouter history={history}>
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route path="/categories/:categoryId?" component={CategoriesPage} />
    </Layout>
  </ConnectedRouter>;

export default AppNavigator;
