import React from 'react';
import ColorPanelSmall from './ColorPanelSmall';
import { Link } from 'react-router-dom';

const Palette = props => {

    const { name, colors } = props;
    
    return (
        <Link to = {`/view-palette/${props.id}`} className = 'm-t-5 shadow bg-grey-1'>
            <h4 className = 'p-a-3'>{name}</h4>
            <div className = 'palette__colors'>
                {
                    colors.map(color => {
                        return <ColorPanelSmall {...color}/>
                    })
                }
            </div>
        </Link>
    )
}

export default Palette;