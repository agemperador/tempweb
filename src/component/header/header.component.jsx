import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'



import headerLogo from '../../minilogo.png'
import menuBars from '../../bars-solid.svg'

import './header.styles.scss'

import MenuBar from '../menu/menu.component'
import {FixedContainer, HeaderLogo} from './header.styles'


const Header = () =>{


    const [scrollPosition, setSrollPosition] = useState(0);
    const [headerState,setHeaderState] = useState(true)

    const [menuState,setMenuState] = useState(false)

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 100) setHeaderState(false)
        else setHeaderState(true)
        setSrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const changeStateMenu = () => {
        setMenuState (!menuState)
    }

    const HEADER_HEIGHTS = ['75px', '50px']

        
    return (

        <FixedContainer headerState = {headerState} id='fix-header'>

            <div className='header'> 
                <HeaderLogo to ='/'>
                    <img  src={headerLogo} alt=""/>
                </HeaderLogo>
                <div className='menu-icon' onClick={()=> changeStateMenu()}>
                    <img  src={menuBars} alt=""/>
                </div>

                <MenuBar menuState={menuState} headerState={headerState} changeStateMenu = {changeStateMenu}/>
            </div>

        </FixedContainer>

    )

}

export default Header