import React from 'react';
import { Link } from 'react-router-dom';

const PaletteCard = props => {

    const { name, colors } = props;
    
    return (
        <Link to = {`/view-palette/${props.id}`} className = 'palette-card shadow  '>
            <div className = 'palette-card__colors'>
                {
                    colors.map(color => {
                        return <div className = 'palette-card__color' style = {{background: color.hex}}></div>
                    })
                }
            </div>
            <p className = 'p-a-1 text-center'>{name}</p>
        </Link>
    )
}

export default PaletteCard;