import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {HEADER_HEIGHTS} from '../../presets'

export const OptionButton = styled(Link)`
color: white;
text-decoration: none;
background-color: #00afef;

height: 100%;
width: 100px;
justify-content: center;
align-items: center;
display: flex;
&:hover {
    box-shadow: 0px 0px 1px 2px #${({hover}) => hover ? hover : '6356FD' };
    transform: translateY(-2px); 
    z-index:11;
    background-color: #${({hover}) => hover ? hover : '6356FD' }  ;
    transition: all 0.5s;
}


@media (max-width: 600px) {
    width: 100%;
    height: 75px;

    display: ${({state}) => state ? 'flex' : 'none' };
    
}
`

const menuWidth =  50;

export const MenuContainer = styled.div`
    height: ${props =>  props.headerState? HEADER_HEIGHTS[0]:HEADER_HEIGHTS[1]};
    display: flex;
    position:relative;
    flex-direction: row;
    font-size: ${props =>  props.headerState? '20px':'15px'};
    font-weight: bold;
    justify-content:space-between;
    width: auto;

    @media (max-width: 600px) {
        width:100%;
        height: 100vh;
        position:absolute;
        font-size:20px;
        top: ${props =>  props.headerState? HEADER_HEIGHTS[0]:HEADER_HEIGHTS[1]};
        
        z-index:10;
        
    }
    transition: all 0.5s;

`



export const MenuListLink = styled.div`
display: flex;
width: 100%;
height: 100%;


@media (max-width: 600px) {
    display:flex;
    background-color: #00afef;
    position: relative;
    flex-direction:column;
    height: 100%;
    width:${({state}) => state ? '50' : '0' }%;

    transition: width 0.5s;

}
`
export const TransparentBackground = styled.div`
@media (max-width: 600px) {
    display: flex;
    background-color: #${({color})=> color? color : 'fff'};
    opacity:  ${({ state }) => state ? '0.5' : '0'};
    height:100vw
    position: relative; 
    width:${({state}) => state ? '50': '100' }%;
    
    transition: width 0.5s,  opacity 1s;
}`