import React from 'react';
import ColorPanelSmall from './ColorPanelSmall';

const Palette = props => {
    
    const { name, colors } = props;
    
    return (
        <div className = 'm-t-5 shadow bg-grey-1'>
            <h4 className = 'p-a-3'>{name}</h4>
              
                
            <div className = 'palette__colors'>
                {
                    colors.map(color => {
                        return <ColorPanelSmall {...color}/>
                    })
                }
            </div>
            
            <div className = 'p-a-2'>
                <button className = 'btn btn-primary m-r-1'>Edit</button>
                <button className = 'btn btn-primary m-r-1'>View</button>
                <button className = 'btn btn-primary m-r-1'>Delete</button>
            </div>
        
        </div>
    )
}

export default Palette;