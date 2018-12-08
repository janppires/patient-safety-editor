import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import HomePage from "components/pages/home";
import CategoriesPage from "components/pages/categories";
import CreateTopicPage from "components/pages/create-topic";

import Layout from "components/layout";

const AppNavigator = ({ history }) =>
  <ConnectedRouter history={history}>
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route path="/topics/new" component={CreateTopicPage} />
      <Route
        path="/categories/:categoryId?/:topicId?"
        component={CategoriesPage}
      />
    </Layout>
  </ConnectedRouter>;

export default AppNavigator;
