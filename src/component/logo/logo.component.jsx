import React from 'react'

import logo from '../../logo.png';

import './logo.style.scss'


const Logo = () =>{

    return (
        <div className='logo-container'>
            <img src={logo} className="App-logo"  alt="logo" />
{/*             <span className='logo-center'>TW</span>
 */}        </div>
)
}

export default Logo;