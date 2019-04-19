import hexToRgb from 'hex-rgb';
import rgbToHex from 'rgb-hex';
import randomColor from 'randomcolor';


export const darkenColor = (r, g, b) => {
    let red, green, blue;
    
    if (r - 15 >= 0) {
        red = r - 15
    }
    
    else {
        red = 0
    }
    
    if (g - 15 >= 0) {
        green = g - 15
    }
    
    else {
        green = 0
    }
    
    if (b - 15 >= 0) {
        blue = b - 15
    }
    
    else {
        blue = 0
    }
    
    return {
        rgb: {
            red,
            green,
            blue
        },
        hex: `#${rgbToHex(red, green, blue)}`,
        shades: generateAlternativeShades({red, green, blue})
    }
}


export const lightenColor = (r, g, b) => {
    let red, green, blue;
    
    if (r +15 <= 255) {
        red = r +15
    }
    
    else {
        red = 255
    }
    
    if (g +15 <= 255) {
        green = g +15
    }
    
    else {
        green = 255
    }
    
    if (b +15 <= 255) {
        blue = b +15
    }
    
    else {
        blue = 255
    }
    
    return {
        rgb: {
            red,
            green,
            blue
        },
        hex: `#${rgbToHex(red, green, blue)}`,
        shades: generateAlternativeShades({red, green, blue})
    }
}

export const calculateShade = (base, diff) => { // Returns a shade that doesnt exceed 255 or go below 0
    if (base + diff > 255) {
        return 255
    }
    
    else if (base + diff < 0) {
        return 0
    }
    
    else {
        return base + diff
    }
}


export const generateRandomColors = (count = 5) => {
    const colors = [];
        for (let i = 0; i < count; i++) {
            
            const hex = randomColor();
            const rgb = hexToRgb(hex);
            
            const color = {
                hex,
                rgb,
                shades: generateAlternativeShades(rgb)
            }
            colors.push(color)
        }
    return colors;
}

export const generateWhiteColors = (count = 5) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const hex = 'FFFFFF';
        const rgb = hexToRgb(hex);
        const color = {
            hex: `#${hex}`, 
            rgb,
            shades: generateAlternativeShades(rgb)
        }
        colors.push(color)
    }
    return colors
}

export const generateAlternativeShades = (color) => { //takes a rgb object and returns an array of {rgb, hex} objects
    let {red, green, blue } = color;
    const shades = [];
    for ( var i = -4; i < 5 ; i++) {
        
        let rShade = calculateShade(red, (i * 20))
        let gShade = calculateShade(green, (i * 20))
        let bShade = calculateShade(blue, (i * 20))
        const rgb = {
            red: rShade,
            green: gShade,
            blue: bShade
        }
        const hex = rgbToHex(rgb.red, rgb.green, rgb.blue);
        shades.push({
            rgb,
            hex: `#${hex}`
        })
    }
    return shades
}