import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { unselectColor } from '../store/actions';

class ColorTuneModal extends React.Component {
    
    state = {
        type: 'RGB',
        red: 0,
        green: 0,
        blue: 0,
        hex: '#000000'
    }
    
    componentDidMount() {
        const [red, green, blue] = this.props.selectedColor.rgb
        const { hex } = this.props.selectedColor
        
        this.setState({
            red,
            green,
            blue,
            hex
        })
    }

    inputHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    changeType = (type) => {
        this.setState({
            type
        })
    }
    
    render() {
        
        const { red, green, blue } = this.state
        
        return ReactDOM.createPortal(
            <div className = 'modal' onClick = {this.props.unselectColor}>
                <div className = 'modal__container' onClick = {e => {e.stopPropagation()} }>
                
                    <h3>Fine Tune</h3>
                    <div className = 'flex'>
                        <button onClick = {() => {this.changeType('RGB')}} className = {this.state.type === 'RGB' ? 'flex-g-1 btn-primary' : 'flex-g-1'}>RGB</button>
                        <button onClick = {() => {this.changeType('HEX')}} className = {this.state.type === 'HEX' ? 'flex-g-1 btn-primary' : 'flex-g-1'}>HEX</button>
                    </div>
                    
                    { this.state.type === 'RGB' ?
                    <React.Fragment>
                        <div className = 'color__preview shadow m-t-2'
                        style = {{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
                        ></div>
                        
                        <form className = 'form'>
                            <div className = 'form__divider'>
                                <label className = 'label'>Red: {red}</label>    
                                <input value = {red} onChange = {this.inputHandler} className = 'slider' type = 'range' min = '0' max = '255' name = 'red' />
                            </div>
                            
                            <div className = 'form__divider'>
                                <label className = 'label'>Green: {green}</label>
                                <input value = {green} onChange = {this.inputHandler} className = 'slider' type = 'range' min = '0' max = '255' name = 'green'/>
                            </div>
                            
                            <div className = 'form__divider'>
                                <label className = 'label'>Blue: {blue}</label>
                                <input value = {blue} onChange = {this.inputHandler} className = 'slider' type = 'range' min = '0' max = '255' name = 'blue' />
                            </div>
                            
                            <div className = 'form__divider'>
                                <button type = 'submit' className = 'btn btn-primary btn-block'>Apply</button>
                            </div>
                        </form>
                    </React.Fragment>
                    
                    : 
                    
                    <React.Fragment>
                        <div className = 'color__preview shadow m-t-2'
                        style = {{backgroundColor: this.state.hex}}
                        ></div>
                        
                        <form className = 'form'>
                            <div className = 'form__divider'>
                                <input className = 'input input-block' value = {this.state.hex} onChange= {this.inputHandler} name = 'hex' />
                            </div>
                            
                            <div className = 'form__divider'>
                                <button type = 'submit' className = 'btn btn-primary btn-block'>Apply</button>
                            </div>
                           
                        </form>
                    </React.Fragment>
                    
                    
                    }
                
                </div>
            </div>
        ,document.querySelector('#modal'))
    }
}

const mapStateToProps = state => ({
    selectedColor: state.createPalette.selectedColor
})

export default connect(mapStateToProps, {unselectColor})(ColorTuneModal);