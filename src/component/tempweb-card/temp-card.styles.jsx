import styled from 'styled-components'

export const PayCardContainer = styled.div`
width:50%;
top:75px;
heigth:500px;
background-color: #FFF;
span{
    color:black;    
}
`

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 5px;
grid-auto-rows: minmax(70px, auto);
`

