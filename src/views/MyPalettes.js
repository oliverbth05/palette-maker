// @flow

import React from 'react';
import { connect } from 'react-redux';
import Palette from '../cmp/Palette';
import PaletteCard from '../cmp/PaletteCard';
import { Link } from 'react-router-dom';

class MyPalettes extends React.Component {


    renderPalettes() {
        return this.props.myPalettes.map(palette => {
            return <PaletteCard key = {palette.id} {...palette}/>
        })
    }
 
    render() { 
        
        if (this.props.myPalettes.length < 1) {
            return (
                <div className = 'container container-full-section container-flex-center'>
                    <h2>You haven't saved any palettes</h2>
                    <Link className = 'btn btn-primary btn-block text-center p-a-2' to = 'create-palette'>Create One</Link>
                </div>
            )
        }
        
        return (
            <div className = 'container-res-1000 p-a-3'>
              <div className=  'palette-grid'>
                {this.renderPalettes()}
              </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    myPalettes: state.myPalettes
})

export default connect(mapStateToProps, null)(MyPalettes);