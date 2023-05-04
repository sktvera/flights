import React, { useState } from 'react'
import { Airplane} from 'iconsax-react'
import classnames from 'classnames';
import CityAndAirport from '../CityAndAirport/CityAndAirport';
import './Assets/styles.css'
import { margin } from '@mui/system';

const FlightChekoutModal = (props) => {


        const [activeScale, setActiveScale] = useState(true)
        const [activeScaleReturn, setActiveScaleReturn] = useState(true)
    const oneWay = props.oneWay
    const roundTrip = props.roundTrip
    const FlightGoing = props.FlightGoing ?? []
    const FlightReturn = props.FlightReturn ?? []
    


    const handleScale = ()=>{
        setActiveScale(false)
    }
    const handleScaleReturn = ()=>{
        setActiveScaleReturn(false)
    }

return(
    <div>
{oneWay === false && roundTrip=== true?
<div className='flightModal'>
<div className='flightModal_ '>
                <div className='flightModal_Title'>
                        <h3>Información del viaje</h3>
                </div>
                <div>
{
/*
/*
/*
 ----------------------- MODAL FLIGHT GOING----------------------------  
/*
/*
*/
}
<div className='screenSelectedModal'> <h3>Detalle De Viaje Ida</h3> </div>     
<div className={classnames(
        {'flightModal_border-location-one': FlightGoing.length  === 1 ? true : false},
        {'flightModal_border-location-two': FlightGoing.length === 2 ? true : false},
        {'flightModal_border-location': FlightGoing.length === 3 ? true : false},
        
        
        )}>
        
        {FlightGoing.map((going)=>{
        const flightDurationHours = `${going.attributeDetail.attributeDescription.slice(0, -2)}h` === '00h'? " " : `${going.attributeDetail.attributeDescription.slice(0, -2)}h`                                                  
        const flightDurationMinutes = `${going.attributeDetail.attributeDescription.substring(2)}m`

                return(
                        <div className='flightModal_border'>
                                <div className='itemScalaHeaderAndBody'>
                                        <div>
                                                <div className='itemScalaHeaderAndBody-space'>
                                                        <p className='tittleChekoutMdodal'>Salida - De {going.location[0].locationId} a {going.location[1].locationId}</p>
                                                        <p style={{ fontSize: '18px', fontWeight: '600' }}>{going.productDateTime.dateOfDeparture}</p>
                                                </div>
                                                <div className='itemScalaHeaderAndBody_'>
                                                        <div className='FlightTime_'>
                                                                <Airplane size="25" color="#00AFE8" variant="Bold"/>
                                                                <p className='tittleChekoutMdodal'>{flightDurationHours} {flightDurationMinutes} Duracion</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='itemsScalaOrderBody'>
                                                <div className='itemScala'>
                                                        <div className='itemScala_'>
                                                                <div>
                                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{going.location[0].locationId}</p>
                                                                </div>
                                                                <div><p className='tittleChekoutMdodal'>hora de salida</p></div>
                                                                <div><p className='tittleChekoutMdodal'>{going.productDateTime.timeOfDeparture}</p></div>
                                                                <CityAndAirport
                                                                        cityAndAirportClass='tittleChekoutMdodal cityAndAirport'
                                                                        iataCode={going.location[0].locationId}
                                                                                />
                                                               {/*  <div><p className='tittleChekoutMdodal'>ciudad</p></div>
                                                                <div><p className='tittleChekoutMdodal'>aeropuerto</p></div> */}
                                                        </div>
                                                        <div className='itemScala_'>
                                                                <div>
                                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{going.location[1].locationId}</p>
                                                                </div>
                                                                <div><p className='tittleChekoutMdodal'>hora de llegada</p></div>
                                                                <div><p className='tittleChekoutMdodal'>{going.productDateTime.timeOfArrival}</p></div>
                                                                <CityAndAirport
                                                                
                                                                        cityAndAirportClass='tittleChekoutMdodal cityAndAirport'
                                                                        iataCode={going.location[1].locationId}
                                                                                />
                                                              {/*   <div><p className='tittleChekoutMdodal'>ciudad</p></div>
                                                                <div><p className='tittleChekoutMdodal'>aeropuerto</p></div> */}
                                                        </div>
                                                </div>
                                                
                                        </div>
                                </div>
                                <div className='itemScalaInformationFlight'>
                                                        <div className='ScalaInformationFlight-element'>
                                                                <p className='tittleChekoutMdodal'>Número de vuelo</p>
                                                                <p className='tittleChekoutMdodal'>{going.flightOrtrainNumber}</p>
                                                        </div>
                                                        <div className='ScalaInformationFlight-element'>
                                                                <p className='tittleChekoutMdodal'>Operado Por</p>
                                                                <p className='tittleChekoutMdodal'>{going.airline.name}</p>
                                                        </div>
                                                        <div className='ScalaInformationFlight-element'>
                                                                <p className='tittleChekoutMdodal'>Avión</p>
                                                                <p className='tittleChekoutMdodal'>{going.equipment.equipmentType}</p>
                                                        </div>
                                                        
                                                </div>
                        </div>
        )})}
</div>

   

{
/*
/*
/*
 ----------------------- MODAL FLIGHT RETURN---------------------------- 
/*
/*
*/
}
<div className='screenSelectedModal'> <h3>Detalle De Viaje Regreso</h3> </div>    
<div className={classnames(
        {'flightModal_border-location-one': FlightReturn.length  === 1 ? true : false},
        {'flightModal_border-location-two': FlightReturn.length === 2 ? true : false},
        {'flightModal_border-location': FlightReturn.length === 3 ? true : false},
        )}>
                       
                       {FlightReturn.map((going)=>{

                        const flightDurationHours = `${going.attributeDetail.attributeDescription.slice(0, -2)}h` === '00h'? " " : `${going.attributeDetail.attributeDescription.slice(0, -2)}h`                                
                        const flightDurationMinutes = `${going.attributeDetail.attributeDescription.substring(2)}m`
                return(
                        <div className='flightModal_border'>
                                <div className='itemScalaHeaderAndBody'>
                                        <div>
                                                <div className='itemScalaHeaderAndBody-space'>
                                                        <p className='tittleChekoutMdodal'>Salida - De {going.location[0].locationId} a {going.location[1].locationId}</p>
                                                        <p style={{ fontSize: '18px', fontWeight: '600' }}>{going.productDateTime.dateOfDeparture}</p>
                                                </div>
                                                <div className='itemScalaHeaderAndBody_'>
                                                        <div className='FlightTime_'>
                                                                <Airplane size="25" color="#00AFE8" variant="Bold"/>
                                                                <p className='tittleChekoutMdodal'>{flightDurationHours} {flightDurationMinutes} Duracion</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='itemsScalaOrderBody'>
                                                <div className='itemScala'>
                                                        <div className='itemScala_'>
                                                                <div>
                                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{going.location[0].locationId}</p>
                                                                </div>
                                                                <div><p className='tittleChekoutMdodal'>hora de salida</p></div>
                                                                <div><p className='tittleChekoutMdodal'>{going.productDateTime.timeOfDeparture}</p></div>
                                                                <CityAndAirport
                                                                        cityAndAirportClass='tittleChekoutMdodal cityAndAirport'
                                                                        iataCode={going.location[0].locationId}
                                                                                />
                                                        </div>
                                                        <div className='itemScala_'>
                                                                <div>
                                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{going.location[1].locationId}</p>
                                                                </div>
                                                                <div><p className='tittleChekoutMdodal'>hora de llegada</p></div>
                                                                <div><p className='tittleChekoutMdodal'>{going.productDateTime.timeOfArrival}</p></div>
                                                                <CityAndAirport
                                                                        cityAndAirportClass='tittleChekoutMdodal cityAndAirport'
                                                                        iataCode={going.location[1].locationId}
                                                                                />
                                                        </div>
                                                </div>
                                                
                                        </div>
                                </div>
                                <div className='itemScalaInformationFlight'>
                                                        <div className='ScalaInformationFlight-element'>
                                                                <p className='tittleChekoutMdodal'>Número de vuelo</p>
                                                                <p className='tittleChekoutMdodal'>{going.flightOrtrainNumber}</p>
                                                        </div>
                                                        <div className='ScalaInformationFlight-element'>
                                                                <p className='tittleChekoutMdodal'>Operado Por</p>
                                                                <p className='tittleChekoutMdodal'>{going.airline.name}</p>
                                                        </div>
                                                        <div className='ScalaInformationFlight-element'>
                                                                <p className='tittleChekoutMdodal'>Avión</p>
                                                                <p className='tittleChekoutMdodal'>{going.equipment.equipmentType}</p>
                                                        </div>
                                                        
                                                </div>
                        </div>
        )})}      
                </div>
                
                </div>
</div>
</div>
:
<div className='flightModal'>
<div className='flightModal_ '>
               
                <div>
                <div className='screenSelectedModal'> <h3>Detalle De Viaje Ida</h3> </div>    
                <div className={classnames(
        {'flightModal_border-location-one': FlightGoing.length  === 1 ? true : false},
        {'flightModal_border-location-two': FlightGoing.length === 2 ? true : false},
        {'flightModal_border-location': FlightGoing.length === 3 ? true : false},
        
        
        )}>
        
        {FlightGoing.map((going)=>{

        const flightDurationHours = `${going.attributeDetail.attributeDescription.slice(0, -2)}h` === '00h'? " " : `${going.attributeDetail.attributeDescription.slice(0, -2)}h`                                
        const flightDurationMinutes = `${going.attributeDetail.attributeDescription.substring(2)}m`
                return(
                        <div className='flightModal_border'>
                                <div className='itemScalaHeaderAndBody'>
                                        <div>
                                                <div className='itemScalaHeaderAndBody-space'>
                                                        <p className='tittleChekoutMdodal'>Salida - De {going.location[0].locationId} a {going.location[1].locationId}</p>
                                                        <p style={{ fontSize: '18px', fontWeight: '600' }}>{going.productDateTime.dateOfDeparture}</p>
                                                </div>
                                                <div className='itemScalaHeaderAndBody_'>
                                                        <div className='FlightTime_'>
                                                                <Airplane size="25" color="#00AFE8" variant="Bold"/>
                                                                <p className='tittleChekoutMdodal'>{flightDurationHours} {flightDurationMinutes} Duracion</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='itemsScalaOrderBody'>
                                                <div className='itemScala'>
                                                        <div className='itemScala_'>
                                                                <div>
                                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{going.location[0].locationId}</p>
                                                                </div>
                                                                <div><p className='tittleChekoutMdodal'>hora de salida</p></div>
                                                                <div><p className='tittleChekoutMdodal'>{going.productDateTime.timeOfDeparture}</p></div>
                                                                <CityAndAirport
                                                                        cityAndAirportClass='tittleChekoutMdodal cityAndAirport'
                                                                        iataCode={going.location[0].locationId}
                                                                                />
                                                        </div>
                                                        <div className='itemScala_'>
                                                                <div>
                                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{going.location[1].locationId}</p>
                                                                </div>
                                                                <div><p className='tittleChekoutMdodal'>hora de llegada</p></div>
                                                                <div><p className='tittleChekoutMdodal'>{going.productDateTime.timeOfArrival}</p></div>
                                                                <CityAndAirport
                                                                        cityAndAirportClass='tittleChekoutMdodal cityAndAirport'
                                                                        iataCode={going.location[1].locationId}
                                                                                />
                                                        </div>
                                                </div>
                                                
                                        </div>
                                </div>
                                <div className='itemScalaInformationFlight'>
                                                        <div className='ScalaInformationFlight-element'>
                                                                <p className='tittleChekoutMdodal'>Número de vuelo</p>
                                                                <p className='tittleChekoutMdodal'>{going.flightOrtrainNumber}</p>
                                                        </div>
                                                        <div className='ScalaInformationFlight-element'>
                                                                <p className='tittleChekoutMdodal'>Operado Por</p>
                                                                <p className='tittleChekoutMdodal'>{going.airline.name}</p>
                                                        </div>
                                                        <div className='ScalaInformationFlight-element'>
                                                                <p className='tittleChekoutMdodal'>Avión</p>
                                                                <p className='tittleChekoutMdodal'>{going.equipment.equipmentType}</p>
                                                        </div>
                                                        
                                                </div>
                        </div>
        )})}
</div>
                 
                </div>
</div>
</div>
}

</div>
)
}

export default FlightChekoutModal