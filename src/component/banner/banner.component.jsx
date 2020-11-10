import React, {useState,useEffect} from 'react'

import './banner.styles.scss'

import SuperLogo from '../../pages/slogo/super-logo.component'

import {SectionBorder} from '../../component/section/section.styles'

import {TransparentLayer} from './banner.styles'

const eventHandler = ()=>{
    return window.addEventListener('state',readYOffset)
}

const readYOffset= ()=>{
    console.log(window.pageYOffset);
    return window.pageYOffset>50
}

const imgRandom = 'https://m.media-amazon.com/images/I/71jod9LB42L._SS500_.jpg'

const Banner = ()=>{

    const [headerState,setHeaderState] = useState(true)
    const [bannerState,setbannerState] = useState(false)

    const changeBannerMode = () =>{
        setbannerState(!bannerState)
    }


    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 50) setHeaderState(false)
        else setHeaderState(true)
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return(
        <div className='banner-container'>
            
                <SuperLogo className='super-logo'/>
                <TransparentLayer 
                                bannerState={bannerState} 
                                onMouseLeave={()=>changeBannerMode()}
                                onMouseEnter={()=>changeBannerMode()}>
                            
                            <div className='inside'>
                                <span>Pensalo</span>
                                <span>Lo hacemos realidad</span>
                            </div>

                </TransparentLayer>

            <SectionBorder color='4B7A9D' side='bot-center' state={headerState}/>


        </div>
        
    
    )
}

export default Banner