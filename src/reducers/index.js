import { combineReducers } from 'redux';
import user from './user';
import hr from './hr';
import finance from './finance';
import legal from './legal';


export default combineReducers({ user, hr, legal, finance });
