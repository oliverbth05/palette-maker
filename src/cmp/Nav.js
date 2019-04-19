// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <nav className = 'nav bg-white b-b-1 b-grey-2'>
                <div className = 'nav__container'>
                    <h3 className = 'color-primary font-light'>Palettes</h3>
                    <div className = 'nav__links'>
                        <NavLink to = '/create-palette' activeClassName = 'nav__link-active' className = 'nav__link'>New Palette</NavLink>
                        <NavLink to = '/my-palettes' activeClassName = 'nav__link-active' className = 'nav__link'>My Palettes</NavLink>
                    </div>
                </div>
            </nav>    
        )
    }
}

export default Nav;