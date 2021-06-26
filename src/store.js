import reducer from './reducers';
import middleware from './middleware';
import { createStore } from 'redux';

const store = createStore(reducer, middleware);

export default store;