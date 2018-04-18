import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import ActiveUserReducer from './activeUserReducer';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;