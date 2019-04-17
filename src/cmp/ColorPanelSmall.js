// @flow
import React from 'react';

type Props = {
    hex: string,
    rgb: string
}

const ColorPanel = (props: Props) => {
    
    const { hex }  = props;
    
    return (
        <div className = 'color-panel'>
            <div className = 'color-panel__color' style = {{ backgroundColor: hex }}>
            </div>
        </div>
    )
}

export default ColorPanel;