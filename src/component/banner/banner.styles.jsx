import styled from 'styled-components'

export const TransparentLayer  = styled.div`
    width: 100%;
    height: calc(100%);
    top: 0;
    position: absolute;
    background-color: black;
    z-index: 9;
    opacity: ${props => props.bannerState ? '0.7' : '0' };  
    top:75px;
    font-size:50px; 
    color:white;
    display: flex;
    justify-content:left;
    align-items:center;
    display:flex;
    transition: all ease-in 0.5s ;
    
    .inside{
        opacity:  ${props => props.bannerState ? '1' : '0' }; 
        transform: ${props => props.bannerState ? 'transitionY(100%)' : 'transitionY(-100%)' }; 
        width:100%;
        transition: ease-in-out 2s ;
        span{
            display:block;
        }
    }
    
`