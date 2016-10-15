//todo: define a reducer for plate
import {ADD_TO_PLATE} from '../constants'

export default function plate(state=[], action){
	console.log('action: ', action)
	console.log('ADD_TO_PLATE: ', ADD_TO_PLATE)
	switch(action.type){
		case ADD_TO_PLATE:
			console.log('state: ', state)
			return state.concat(action.item)
		default: return state;
	}

}


