import React from  'react'

import {PricesContainer} from './prices.styles'

import TempWebCard  from '../../component/tempweb-card/temp-card.component'

import {SectionContainer} from '../../component/section/section.styles'
import {PageContainer} from '../../component/page-container/page-container.styles'

const Prices = () =>{

    return(
        <PageContainer>
        <SectionContainer  background='550000'>
                    <TempWebCard/>
        </SectionContainer>
        </PageContainer>
    )
}

export default Prices;