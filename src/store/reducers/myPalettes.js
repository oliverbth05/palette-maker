const initialState = []

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'LOAD_PALETTES_FROM_STORAGE':
            return action.payload
        
        case 'SAVE_PALETTE' :
            return state.concat(action.payload)
            
        default :
            return state 
    }
}

export default reducer;