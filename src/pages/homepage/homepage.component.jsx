import React from 'react';

import './homepage.styles.scss';

import Banner from '../../component/banner/banner.component'
import {SectionContainer} from '../../component/section/section.styles'

import SpecialButton from '../../component/special-button/special-button.component'

const Homepage = ()=>{

    return (
        <div className='homepage-container'>
            
            <Banner />
            <SectionContainer background='4B7A9D'>
            
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut provident eos ab, delectus cumque culpa tenetur quis obcaecati cupiditate perspiciatis omnis beatae blanditiis unde architecto, laboriosam debitis, iusto voluptates?</span>

            <SpecialButton name='LOREM'/>

            </SectionContainer>
            <SectionContainer background='eaeaec'>
            <div className='main-banner1' />
            </SectionContainer>
        </div>
    )
}

export default Homepage;