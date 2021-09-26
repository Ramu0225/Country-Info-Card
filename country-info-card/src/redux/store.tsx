import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import thunk from 'redux-thunk';

const storeFactory = () => {
  const middleware = [thunk];
  const reduxStore = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
  return reduxStore
}

export default storeFactory;