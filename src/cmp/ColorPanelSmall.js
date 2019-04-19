import React from 'react';

const ColorPanelSmall = (props) => {
    const { hex }  = props;
    return <div className = 'color-panel__color' style = {{ backgroundColor: hex }}></div>
}

export default ColorPanelSmall;