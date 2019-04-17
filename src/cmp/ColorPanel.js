// @flow

import React from 'react';

type Props = {
    hex: string,
    rgb: string
}

const ColorPanel = (props: Props) => {
    
    const { hex, rgb, index } = props;
    
    console.log(hex.length !== 7)
    
    return (
        <div className = 'color-panel shadow m-a-1 bg-grey-1'>
            <div className = 'color-panel__color' style = {{ backgroundColor: hex }}>
            </div>
            <div className = 'color-panel__details'>
                <p>{hex}</p>
                <div className = 'flex'>
                    <button className = 'flex-g-1 b-r-1 b-grey-1 btn-primary'>Darken</button>
                    <button className = 'flex-g-1 b-r-1 b-grey-1 btn-primary'>Lighten</button>
                    <button className = 'flex-g-1 btn-primary' onClick = { () => { props.selectColor({hex, rgb, index})}} >Tune</button>
                </div>
            </div>
        </div> 
    )
}

export default ColorPanel;