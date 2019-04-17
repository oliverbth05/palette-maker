import uniqid from 'uniqid';

export const loadPalettesFromStorage = () => {
    let storedPalettes = JSON.parse(window.localStorage.getItem('saved'));
    if (!storedPalettes) {
        storedPalettes = []
    }
    return {
        type: 'LOAD_PALETTES_FROM_STORAGE',
        payload: storedPalettes
    }
}

export const savePalette = (data) => {
    let copy = {...data}
    copy.id = uniqid()
    let storedPalettes = JSON.parse(window.localStorage.getItem('saved'));
    if (!storedPalettes) {
        storedPalettes = []
    }
    storedPalettes.push(copy)
    window.localStorage.setItem('saved', JSON.stringify(storedPalettes))
    return {
        type: 'SAVE_PALETTE',
        payload: copy
    }
}

export const randomizeColors = () => {
    return {
        type: 'RANDOMIZE_COLORS'
    }
}

export const resetColors = () => {
    return {
        type: 'RESET_COLORS'
    }
}

export const toggleSaveModal = () => {
    return {
        type: 'TOGGLE_SAVE_MODAL'
    }
}

export const selectColor = color => {
    return {
        type: 'SELECT_COLOR',
        payload: color
    }
}

export const unselectColor = () => {
    return {
        type: 'UNSELECT_COLOR'
    }
}