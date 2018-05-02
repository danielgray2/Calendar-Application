import { combineReducers } from 'redux';
import listOfBows from "./listOfBows";
import selectBow from "./selectBow";

const allReducers = combineReducers({
    bows: listOfBows,
    selectBow: selectBow
});

export default allReducers;