import React from 'react';
import { connect  } from 'react-redux';
import { changeColor, darkenColor, lightenColor, selectColor } from '../store/actions';

class ColorPanel extends React.Component {
    
    state = {
        showShades: false,
    }
    
    toggleShades = () => {
        this.setState((prevState) => {
            return {
                showShades: !prevState.showShades
            }
        })
    }
    
    changeColor = (color) => {
        const { changeColor, index } = this.props;
        changeColor({...color, index})
        this.setState({
            showShades: false
        })
    }
    
    renderShades(shades) {
        return shades.map(color => {
            return <div onClick = {() => {this.changeColor(color)}} className = 'color-panel__shade' style = {{backgroundColor: color.hex}}><p>{color.hex}</p></div>
        })
    }
    
    render() {
    const { hex, rgb, index, shades } = this.props;
    const { showShades } = this.state;
    return (
        <div className = 'color-panel shadow bg-grey-1'>
            <div className = 'color-panel__colors' >
                { showShades ? 
                this.renderShades(shades)
                :
                <div style = {{ backgroundColor: hex }} className = 'color-panel__shade'><p>{hex}</p></div>
                }
            </div>
            <div className = 'color-panel__details'>
                <p>{hex}</p>
                <div className = 'flex'>
                    <button className = 'flex-g-1 b-r-1 b-grey-1 btn-primary' onClick = {this.toggleShades}><i class="fas fa-layer-group"></i></button>
                    <button className = 'flex-g-1 b-r-1 b-grey-1 btn-primary' onClick = {() => {this.props.darkenColor(this.props.index)}}><i class="far fa-sun"></i></button>
                    <button className = 'flex-g-1 b-r-1 b-grey-1 btn-primary' onClick = {() => {this.props.lightenColor(this.props.index)}}><i class="fas fa-sun"></i></button>
                    <button className = 'flex-g-1 btn-primary' onClick = { () => { this.props.selectColor({hex, rgb, index})}} ><i class="fas fa-sliders-h"></i></button>
                </div>
            </div>
        </div> 
    ) 
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {changeColor, darkenColor, lightenColor, selectColor})(ColorPanel);