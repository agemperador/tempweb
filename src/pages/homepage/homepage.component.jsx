import React from 'react';

import './homepage.styles.scss';

import Banner from '../../component/banner/banner.component'
import Directory from '../../component/directory/directory.component'

const Homepage = ()=>{

    return (
        <div className='homepage-container'>
            
            <Banner />
            <Directory/>
        </div>
    )
}

export default Homepage;