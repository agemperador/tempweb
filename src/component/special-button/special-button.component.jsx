import React from 'react'

import {SpecialButtonContainer} from './special-button.styles'

const SpecialButton = ({name}) =>{
    return (
    <SpecialButtonContainer >
        {name}
    </SpecialButtonContainer>
    )
}

export default SpecialButton