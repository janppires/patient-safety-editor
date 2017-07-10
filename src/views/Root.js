import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from '../redux';
import AppNavigator from './AppNavigator';

const Root = () => (
  <Provider store={store}>
    <AppNavigator history={history}/>
  </Provider>
)

export default Root;