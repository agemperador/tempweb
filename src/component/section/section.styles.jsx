import styled from 'styled-components'


export const SectionContainer = styled.div`
width: 100%;
height: 100vh;
display:flex;
flex-direction:column;
position:relative;
background-color: #${props => props.background ? props.background : 'fff' };
align-items:center;
text-align: center;
justify-content:center;
span {
    margin-top: 50px;
    display:block;
    color: #fff;
    font-size: 30px;
    font-weight:bolder;
    padding: 30px;

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
        if (props.side =='bot-right'){
            return (`border-right: 50vw solid #${props.color};
                    border-left: 50vw solid #${props.color};
                    border-top: ${props.state ?'5': '40'}vh solid transparent;`)
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
}
`