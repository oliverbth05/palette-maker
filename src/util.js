// @flow

export const hexToRgb = (hex : string) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}

const addPaddingToHex = hex => {
    if (hex.length < 2) {
        return `0${hex}`
    }
    else {
        return hex
    }
}

export const rgbToHex = (rgb) => {
    const [red, green, blue] = rgb;
    
    
    const result = `#${addPaddingToHex(red.toString(16))}${addPaddingToHex(green.toString(16))}${addPaddingToHex(blue.toString(16))}`;
    return result;
}

console.log(rgbToHex([100, 20, 155]))

export const generateRandomColors = (count: number = 5) => {
    const colors = [];
        for (let i = 0; i < count; i++) {
            const hex = Math.floor(Math.random()*16777215).toString(16);
            const color = {
                hex: `#${hex.toUpperCase()}`,
                rgb: hexToRgb(hex)
            }
            colors.push(color)
        }
    return colors;
}

export const generateWhiteColors = (count: number = 5) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const hex = 'FFFFFF'
        const color = {
            hex: `#${hex.toUpperCase()}`,
            rgb: hexToRgb(hex)
        }
        colors.push(color)
    }
    return colors
}