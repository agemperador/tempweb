import React, {useState} from 'react'

import {OptionButton, TransparentBackground, MenuContainer, MenuListLink} from './menu.styles'

const listIndexMenu = [
    {
        name: "Inicio",
        link: '/',
        color: 'd04040'
    },{
        name: "Precios",
        link: '/prices',
        color: '0740c0'
    },{
        name: "Nosotros",
        link: '/',
        color: '089527'
    },{
        name: "Clientes",
        link: '/',
        color: '904080'
    }
]



const MenuBar = (props)=>{
    
    
    const {menuState,headerState,changeStateMenu}= props

    const [transparentColor, setTransparentColor] = useState('fff');


    const changeBackground = (color)=>{
        setTransparentColor(color)
    }

    return(

        <MenuContainer menuState={menuState}  headerState={headerState}>
            <TransparentBackground  state={menuState}
                                    color={transparentColor}
                                    onClick={()=>menuState?changeStateMenu() : null} />
            <MenuListLink state={menuState}>
                {
                    listIndexMenu.map(({name,link,color}) => {return(
                            <OptionButton to={link} state={menuState} 
                              onClick={()=>menuState?changeStateMenu() : null}
                                    /*onMouseEnter={()=>changeBackground(color)}  */
                                hover={color}>
                                {name}
                            </OptionButton>)}
                            )
                }
            </MenuListLink>
        </MenuContainer>
    )
}

export default MenuBar;