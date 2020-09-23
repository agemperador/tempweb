import styled from 'styled-components'

export const TransparentLayer  = styled.div`
    width: 100%;
    height: calc(100%);
    top: 0;
    position: absolute;
    background-color: black;
    z-index: 9;
    opacity: ${props => props.bannerState ? '0.7' : '0' };  
    transition: all 0.5s;
    top:75px;
    font-size:50px; 
    color:white;
    align-items:center;
    display:flex
`