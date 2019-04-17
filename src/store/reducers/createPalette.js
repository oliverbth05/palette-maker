import { generateRandomColors, generateWhiteColors } from '../../util';

const initialState = {
    saveModal: false,
    colors: generateRandomColors(),
    selectedColor: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'RANDOMIZE_COLORS' :
            return {
                ...state,
                colors: generateRandomColors()
            }
            
        case 'RESET_COLORS' :
            return {
                ...state,
                colors: generateWhiteColors()
            }
        
        case 'TOGGLE_SAVE_MODAL' :
            return {
                ...state,
                saveModal: !state.saveModal
            }
            
        case 'SELECT_COLOR' :
            return {
                ...state,
                selectedColor: action.payload
            }
            
        case 'UNSELECT_COLOR' :
            return {
                ...state,
                selectedColor: null
            }
        
        default :
            return state
    }
}

export default reducer;