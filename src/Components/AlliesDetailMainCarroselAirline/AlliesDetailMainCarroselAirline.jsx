import React, { useEffect, useRef } from 'react'
import Avianca from './Assets/Img/Avianca.png'
import copaAirlines from './Assets/Img/copa-airlines.png'
import latamAirlines from './Assets/Img/latam-airlines.png'
import unitedAirlines from './Assets/Img/unitedAirlines.png'
import VivaAirlogo from './Assets/Img/Viva_Air_logo.png'
import Wingologo from './Assets/Img/Wingo_logo.png'
import './Assets/styles.css'

const sliderDateClinics = [
    {id: 1, img: Avianca, title: 'Avianca'},
    {id: 2, img: copaAirlines, title: 'copa Airlines'},
    {id: 3, img: latamAirlines, title: 'lata mAirlines'},
    {id: 4, img: unitedAirlines, title: 'unite dAirlines'},
    {id: 5, img: VivaAirlogo, title: 'Viva Air logo'},
    {id: 6, img: Wingologo, title: 'Wingologo'},
]
function AlliesDetailMainCarroselAirline() {
    const autoCarousel = useRef(null)


    const nextFunc = () => {
        if(autoCarousel.current.children.length > 0) {
           const firstCardClinics = autoCarousel.current.children[0]

           autoCarousel.current.style.transition = `300ms ease-out all`
           const widthCardClinics = autoCarousel.current.children[0].offsetWidth
           autoCarousel.current.style.transform = `translateX(-${widthCardClinics}px)`

           const transition = () => {
            autoCarousel.current.style.transition = 'none'
            autoCarousel.current.style.transform = `translateX(0)`

            autoCarousel.current.appendChild(firstCardClinics)

               /*Después que se ejecute lo elimino para que el boton de anterior funcione*/
               autoCarousel.current.removeEventListener('transitionend', transition)
           }

           autoCarousel.current.addEventListener('transitionend', transition)
        }
    }

    useEffect(() => {
        setInterval(() => {
            nextFunc()
        }, 5000)
    }, [])
  return (
    <div   className='procedureCategoryDetailsMain_two'>
      <div className='alliesAirlineSlider'>
        <div className='alliesAirlineSlider_'>
            <div className='alliesAirlineSlider_cards' ref={autoCarousel}>
                {sliderDateClinics.map((dateClinics) => {
                    return(
                        <div key={dateClinics.id} className='alliesAirlineSlider_date'>
                            <div className='alliesAirlineSlider_img'>
                                <img src={dateClinics.img} alt={dateClinics.title} />
                            </div>
                           
                        </div>
                        
                    )
                })}
            </div>  
        </div>
    </div>
    </div>
  )
}

export default AlliesDetailMainCarroselAirline










