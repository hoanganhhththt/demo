import { combineReducers } from 'redux';
import ItemReducer from './ItemReducer';
import loginReducer from './loginReducer'; 
const rootReducer =  combineReducers({
    items:ItemReducer,
    login:loginReducer
});
export default rootReducer;