import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-thunk';

// const configureStore = (preloadedState = {}) => (
//   createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(thunk, logger)
//   )
// );

// export default configureStore;

//this gets logger working
const middleWares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middleWares.push(logger);
}
export default (preloadedState) => (
  createStore(rootReducer, preloadedState, applyMiddleware(...middleWares))
);