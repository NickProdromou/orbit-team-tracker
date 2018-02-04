import { SET_MENU_STATE } from '../actions/uiActions.js';

export default function ui(state = {menuOpen: false} , action) {
  switch(action.type) {
  
    case SET_MENU_STATE:            
    return  Object.assign({} ,state,{menuOpen: action.menuOpen})    
    
    default:
    return state;
  }
};