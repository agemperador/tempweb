import React from 'react'
import './footer.styles.scss'

const Footer = () => {

    return (
        <div className='footer'>
            <div className='grid-container'>
            <div className='grid'>
                <div className='col'>Contacto</div>
                <div className='col'>Acerca de</div>
            </div>
            </div>
            <div className='copyright'>
                <div className='text' >
                    TempWeb 2020
                </div>
            </div>
        </div >
    )
}


export default Footer;