import React from "react";
import { Provider } from "react-redux";
import store, { history } from "redux/store";
import AppNavigator from "components/app-navigator";

const Root = () =>
  <Provider store={store}>
    <AppNavigator history={history} />
  </Provider>;

export default Root;
