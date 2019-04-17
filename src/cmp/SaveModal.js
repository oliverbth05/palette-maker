import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { toggleSaveModal, savePalette } from '../store/actions';

class SaveModal extends React.Component {
     
    state = {
        paletteName: ''
    }
    
    inputHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    submitHandler = e => {
        e.preventDefault();
        const data = {
            name: this.state.paletteName,
            colors: [...this.props.colors]
        }
        this.props.savePalette(data);
        this.props.toggleSaveModal();
    }
    
    render() {
       if (!this.props.show) return null
    
        return ReactDOM.createPortal(
            <div className = 'modal' onClick = {this.props.toggleSaveModal}>
            
                <div className = 'modal__container' onClick = {(e) => {e.stopPropagation()}}>
                    <h3 className = 'text-center'>Save Palette</h3>
                    <form className = 'form' onSubmit = {this.submitHandler}>
                        <div className = 'form__divider'>
                            <label className = 'label'>Palette Name</label>
                            <input onChange = {this.inputHandler} name = 'paletteName' className = 'input input-block'/>
                        </div>
                        
                        <div className = 'form__divider'>
                            <button type = 'submit' className = 'btn btn-primary btn-block'>Save</button>
                        </div>
                    </form>
                    
                </div>
            
            </div>, document.querySelector('#modal')
        ) 
    }
    
    
}

const mapStateToProps = state => ({
    show: state.createPalette.saveModal,
    colors: state.createPalette.colors
})

export default connect(mapStateToProps, {toggleSaveModal, savePalette})(SaveModal);