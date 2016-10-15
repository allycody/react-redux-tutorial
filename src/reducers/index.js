import { combineReducers } from 'redux';
import menu from './menu'
import plate from './plate'

//todo: build a rootReducer:
const rootReducer = combineReducers({
	menu, 
	plate
});

export default rootReducer;
