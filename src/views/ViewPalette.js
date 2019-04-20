import React from 'react';
import { connect } from 'react-redux';

class ViewPalette extends React.Component {
    
    state = {
        id: null,
        colors: null,
        name: null,
        type: 'HEX'
    }
    
    changeType = (type) => {
        this.setState({
            type: type
        })
    }
    
    componentDidMount() {
        const {id} = this.props.match.params
        const palette = this.props.palettes.filter(palette => palette.id === id)[0]
        this.setState({
            ...palette
        })
    }
    
    renderColors(colors) {
        return colors.map(color => {
            
            const {red, green, blue} = color.rgb;
            return (
                <div className = 'palette-horizontal'>
                    <div className = 'palette-horizontal__color'  style = {{background: color.hex}} />
                    <h4 className = 'font-normal m-l-3'>{color.hex.toUpperCase()} RGB:({red}, {green}, {blue})</h4>
                </div>
            )
        })
    }
    
    render() {
        
        const { colors, name, type } = this.state
        
        if (colors === null || name === null) {
            return (
                
                <div className = 'container-res-1000'>
                LOADING
                </div>
                    
            )
        }
        
        return (
            <div className = 'container-res-1000'>
                <h3 className = 'font-normal text-center p-a-2'>{name}</h3>
                    {this.renderColors(colors)}
                <div className = 'm-t-2 m-b-4'><button>Edit</button><button>Delete</button></div>
                
                <div>
                    <h3>.scss</h3>
                    
                    <div className = 'flex'>
                        <button onClick = {() => {this.changeType('HEX')}} className = {this.state.type === 'HEX' ? 'flex-g-1 btn-primary' : 'flex-g-1'}>HEX</button>
                        <button onClick = {() => {this.changeType('RGB')}} className = {this.state.type === 'RGB' ? 'flex-g-1 btn-primary' : 'flex-g-1'}>RGB</button>
                    </div>
                    
                    { type === 'HEX' ?
                    
                    <div className = 'scss-view p-a-2'>
                        <p>$color-1: {colors[0].hex};</p>
                        <p>$color-2: {colors[1].hex};</p>
                        <p>$color-3: {colors[2].hex};</p>
                        <p>$color-4: {colors[3].hex};</p>
                        <p>$color-5: {colors[4].hex};</p>
                    </div>
                    
                    : 
                    
                    <div className = 'scss-view p-a-2'>
                        <p>$color-1: {`rgb(${colors[0].rgb.red}, ${colors[0].rgb.green}, ${colors[0].rgb.blue})`};</p>
                        <p>$color-2: {`rgb(${colors[1].rgb.red}, ${colors[1].rgb.green}, ${colors[1].rgb.blue})`};</p>
                        <p>$color-3: {`rgb(${colors[2].rgb.red}, ${colors[2].rgb.green}, ${colors[2].rgb.blue})`};</p>
                        <p>$color-4: {`rgb(${colors[3].rgb.red}, ${colors[3].rgb.green}, ${colors[3].rgb.blue})`};</p>
                        <p>$color-5: {`rgb(${colors[4].rgb.red}, ${colors[4].rgb.green}, ${colors[4].rgb.blue})`};</p>
                    </div>
                    
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    palettes: state.myPalettes
})

export default connect(mapStateToProps, {})(ViewPalette);