import { createStore, applyMiddleware, combineReducers } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "redux/modules";

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

const historyRouterMiddleware = routerMiddleware(history);

const middlewares = [historyRouterMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export default function configureStore(initialState) {
  initialState = initialState || {};
  return createStore(
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
}
