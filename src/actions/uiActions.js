export const SET_MENU_STATE = 'SET_MENU_STATE';

export function toggleMenu(isMenuOpen) {
  
  return {
    type: SET_MENU_STATE,
    menuOpen: isMenuOpen
  }
}