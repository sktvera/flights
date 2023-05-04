import React, { useEffect, useRef} from 'react'
import ClinicaEspecialistaPoblado from './Assets/Img/CLINICA-ESPECIALISTA-POBLADO.jpeg'
import CirugiaPlasticaMedellin from './Assets/Img/Cirugía-plástica-medellín_Mesa-de-trabajo.png'
import ClinicaEspecialistaDeBarranquilla from './Assets/Img/ClinicaEspecialistaDeBarranquilla.png'
import Estetic from './Assets/Img/+ESTETIC.png'
import TuCirujanoSeguro from './Assets/Img/TU-CIRUJANO-SEGURO.png'
import InterQuirurgica from './Assets/Img/INTERQUIRURGICA.jpeg'

import './Assets/styles.css'




const slider = [
    {id: 1, img: ClinicaEspecialistaPoblado, title: 'Clinica Especialista Del Poblado'},
    {id: 2, img: CirugiaPlasticaMedellin, title: 'Cirugia Plastic Medellin'},
    {id: 3, img: ClinicaEspecialistaDeBarranquilla, title: 'Clinica Especialista De Barranquilla'},
    {id: 4, img: Estetic, title: '+ Estetic'},
    {id: 5, img: TuCirujanoSeguro, title: 'Tu Cirujano Seguro'},
    {id: 6, img: InterQuirurgica, title: 'Inter Quirurgica'},
]
function AlliesDetailMainCarrosel() {
    const Carousel = useRef(null);
   


    const newtFunc = () => {
        if(Carousel.current.children.length > 0) {

           const Card = Carousel.current.children[0]
           Carousel.current.style.transition = `500ms ease-out all`
           const widthCard = Carousel.current.children[0].offsetWidth
           Carousel.current.style.transform = `translateX(-${widthCard}px)`

           const transition = () => {
            Carousel.current.style.transition = 'none'
            Carousel.current.style.transform = `translateX(0)`

            Carousel.current.appendChild(Card)

               /*Después que se ejecute lo elimino para que el boton de anterior funcione*/
               Carousel.current.removeEventListener('transitionend', transition)
           }

           Carousel.current.addEventListener('transitionend', transition)
        }
    }

    useEffect(() => {
        setInterval(() => {
            newtFunc()
        }, 5000)
    }, [])

  return (
    <div className='flightsAlliesSlider'>
        <div className='flightsAlliesSlider_'>
            <div className='flightsHeaderSlide_cards_' ref={Carousel}>
                {slider.map((date) => {
                    return(
                        <div key={date.id} className='flightsAlliesSlider_date'>
                            <div className='flightsAlliesSlider_img'>
                                <img src={date.img} alt={date.title} />
                                <div className='flightsAlliesSlider_title'>
                                <h2>{date.title}</h2>
                            </div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>  
        </div>
    </div>
  )
}


export default AlliesDetailMainCarrosel
