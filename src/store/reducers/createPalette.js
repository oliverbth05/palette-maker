import { generateWhiteColors, generateRandomColors, generateAlternativeShades, darkenColor, lightenColor } from '../../util';

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
            
        case 'CHANGE_COLOR' :
            
            const newColors = [...state.colors];
            
            newColors[action.payload.index] = {
                hex: action.payload.hex,
                rgb:action.payload.rgb,
                shades: generateAlternativeShades(action.payload.rgb)
            }
            
            return {
                selectedColor: null,
                colors: newColors
            }
            
        case 'DARKEN_COLOR' : {
            let colors = [...state.colors]
            let color = {...colors[action.payload]}
            let { red, green, blue } = color.rgb;
            color = darkenColor(red, green, blue);
            colors.splice(action.payload, 1, color)
            return {
                ...state,
                colors
            }
        }
        
        case 'LIGHTEN_COLOR' : {
            
            let colors = [...state.colors]
            
            let color = {...colors[action.payload]}
            
            let { red, green, blue } = color.rgb; 
            
            color = lightenColor(red, green, blue);
            
            colors.splice(action.payload, 1, color)
            
            return {
                ...state,
                colors
            }
        }
        
        default :
            return state
    }
}

export default reducer;