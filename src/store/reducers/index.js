import { combineReducers } from 'redux';
import myPalettes from './myPalettes';
import createPalette from './createPalette';

export default combineReducers({
    myPalettes,
    createPalette
})