import React from 'react'

import Card from '../card/card.component'

import {CardSliderContainer,RowButton} from './card-slider.styles'

function CardSlider() {
    return (

        <CardSliderContainer>
            
            <Card/>
            <Card/>
            <Card/>
            <RowButton dir='left'/>
        <RowButton  dir='right'/>
        </CardSliderContainer>

    )
}

export default CardSlider
