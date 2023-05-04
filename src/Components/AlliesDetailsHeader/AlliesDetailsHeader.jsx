

import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { ArrowDown2 } from 'iconsax-react'
import NuestrosAliados from './Assets/Img/NuestrosAliados.jpg'
import './Assets/styles.css'




const TurismHeader = () => {

    

  return (
    
        <div className='alliesmHeader'>
            <img src={NuestrosAliados} alt="" />
            <div/>
            <div className='allies_info'>
                <div className='allies-spaceHeader'/>
                <div className='turismHeader-info_text'>
                    <div className='turismHeader-info_text-tittle'>
                        <h1>Nuestros aliados</h1>
                    </div>
                   
                    <div className='turismHeader-info_text-label'>
                        <p>It is a long established fact tehat a reader will be distracted by the readable content of a page when loojing at its loyout it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making it look like readable English. Many desktop publishing packages and web page edit.</p>
                    </div>
                    <div className='procedureCategoryC-header_button-container'>
                        <div className='procedureCategoryC-header_button'>
                                <LinkScroll to='mainCategory' spy={true} smooth={true} offset={-120} duration={500}>
                                ver más <span><ArrowDown2 size="32" color="#004274"/></span>
                                </LinkScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}

export default TurismHeader

