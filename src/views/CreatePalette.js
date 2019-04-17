// @flow
import React from 'react';
import ColorPanel from '../cmp/ColorPanel';
import SaveModal from '../cmp/SaveModal';
import ColorTuneModal from '../cmp/ColorTuneModal';

import { savePalette, randomizeColors, toggleSaveModal, resetColors, selectColor } from '../store/actions';
import { connect } from 'react-redux';

class CreatePalette extends React.Component {
    render() {

        return (
            <div className = 'container-fluid'>
                <SaveModal/>
                { this.props.selectedColor !== null ? <ColorTuneModal /> : null }
                <div className = 'p-a-3'>
                    <div className = 'm-t-3 m-b-3'>
                        <button onClick = {this.props.randomizeColors} className = 'btn btn-primary shadow btn-round m-r-1'>Randomize</button>
                        <button onClick = {this.props.toggleSaveModal} className = 'btn btn-primary shadow btn-round m-r-1'>Save Palette</button>
                        <button onClick = {this.props.resetColors} className = 'btn btn-primary shadow btn-round'>Reset</button>
                    </div>
                    <div className = 'color-grid'>
                        <ColorPanel {...this.props.colors[0]} index = {0} selectColor = {this.props.selectColor}/>
                        <ColorPanel {...this.props.colors[1]} index = {1} selectColor = {this.props.selectColor}/>
                        <ColorPanel {...this.props.colors[2]} index = {2} selectColor = {this.props.selectColor}/>
                        <ColorPanel {...this.props.colors[3]} index = {3} selectColor = {this.props.selectColor}/>
                        <ColorPanel {...this.props.colors[4]} index = {4} selectColor = {this.props.selectColor}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    colors: state.createPalette.colors,
    saveModal: state.createPalette.saveModal,
    selectedColor: state.createPalette.selectedColor
})

export default connect(mapStateToProps, {savePalette, randomizeColors, toggleSaveModal, resetColors, selectColor})(CreatePalette);