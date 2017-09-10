import { createStore, applyMiddleware, combineReducers } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "redux/init-sagas";
import reducers from "redux/modules";

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

const historyRouterMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, historyRouterMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export default function configureStore(initialState) {
  initialState = initialState || {};
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
      // other store enhancers if any
    )
  );
  initSagas(sagaMiddleware);
  console.log("Saga Middleware Installed!");
  return store;
}
