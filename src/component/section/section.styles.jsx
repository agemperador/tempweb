import styled from 'styled-components'


export const SectionContainer = styled.div`
width: 100%;
height: 100vh;
display:flex;
flex-direction:row;
position:relative;
background-color: #${props => props.background ? props.background : 'fff' };
align-items:center;
text-align: center;
justify-content:space-evenly;
padding: 30px;
span {
    margin-top: 50px;
    display:block;
    color: #000;
    font-size: 30px;
    font-weight:bolder;
    padding: 30px;
    z-index:2;
}
`



export const SectionBorder = styled.div`
    height: 0;
    width: 0;
    bottom: 0;
    right: 0;
    position: absolute;

    z-index:9;
    
    ${props => {
        
        switch( props.side){
            case('bot-center'):{
                return (`
                        border-right: 50vw solid #${props.color};
                        border-left: 50vw solid #${props.color};
                        border-top: ${props.state ?'5': '40'}vh solid transparent;
                        `)  
            }
            case('bot-left'):{
                return (`
                        border-right: 0vw solid #${props.color};
                        border-left: 100vw solid #${props.color};
                        border-top: 15vh solid transparent;
                        `)  
            }
            case('bot-right'):{
                return (`
                        border-right: 100vw solid #${props.color};
                        border-left: 0vw solid #${props.color};
                        border-top: 15vh solid transparent;
                        `)  
            }
            default: {return `border0;`}
        }
    }
    }
    @media (max-width: 600px) {

        ${props => {
            if (props.side =='bot-right'){
                return (  
                        ` bottom: 0;`
                        )
            }
        }
        }
    }
    transition: border-top 0.5s;

`


export const ImagenPresentacion = styled.img`
    position: absolute;
    z-index:0;
`


export const ImagenPresentacionPlaceHolder = styled.div`
    position: absolute;
    width:400px;
    height:400px;
    background-color: #4499ff;
    z-index:0;
`