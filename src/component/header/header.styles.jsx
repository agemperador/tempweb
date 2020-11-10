import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {HEADER_HEIGHTS} from '../../presets'



export const FixedContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: ${({headerState})=>headerState? HEADER_HEIGHTS[0]: HEADER_HEIGHTS[1]};
    z-index: 11;
    display:flex;
    transition: height 0.5s;
    
`

export const HeaderLogo  = styled(Link)`
    
    height:100%;
    
    margin-left: 30px;
    object-fit:scale-down;
    align-items:center;
    justify-content:center;
    
    display:flex;
    img{
        height:90%;
        width:auto;
    }
    

`