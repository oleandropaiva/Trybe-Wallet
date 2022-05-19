import { combineReducers } from 'redux';
import wallet from './wallet';
import user from './user';

const rootReducer = combineReducers ({ user, wallet });

export default rootReducer;

/* const INITIAL_STATE = { name: '' }; */
/*  */
/* const reducer = (state = INITIAL_STATE, action) => { */
/*   switch (action.type) { */
/*   case 'CHANGE_NAME': */
/*     return { ...state, name: action.payload }; */
/*   default: */
/*     return state; */
/*   } */
/* }; */

// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
