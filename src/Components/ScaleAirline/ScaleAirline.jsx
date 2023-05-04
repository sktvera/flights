import React, { useState } from 'react'

import Modal from '@mui/material/Modal';
import { Box } from '@material-ui/core'
import classnames from 'classnames';
import { Airplane } from 'iconsax-react'
import CityAndAirport from '../CityAndAirport/CityAndAirport'

import './Assets/styles.css'

const ScaleAirline = (props) => {

    const flight = props.flight
    
    const [openScales, setOpenScales] = React.useState(false);

    const handleScaleClose = () => {
    setOpenScales(false);
    }
    const handleScaleOpen=()=>{
    setOpenScales(true)
    }

    return (
            <div className='name-flight-going-airline'>
                <p className='itemFontSegmentDate'>{flight.segments[0].productDateTime.timeOfDeparture}</p>
                {flight.segments.length > 1?
                    <p
                    className='scaleName scaleNameHover'
                    onClick={handleScaleOpen}
                    style={{ fontSize: '15px'}}
                    >
                    Escala 
                    </p>
                :
                    <p
                    className='scaleName'
                    style={{ fontSize: '15px'}}
                    >
                    Directo 
                    </p>
                }

            {openScales ?
            <div>
                    <Modal
                    open={handleScaleOpen}
                    onClose={handleScaleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                            <Box className='modal'>
                                    <div>
                                            <div className='cardModal'>
                                                <div className='tittleCardModal'>
                                                        <h3>Detalle De Vuelo</h3>
                                                </div>
                                            <div  className={classnames(
                                            {'cardModalGrid_ThreeScales': flight.segments.length === 3 ? true : false},
                                            { 'cardModalGrid_TwoScales': flight.segments.length === 2 ? true : false},
                                            {'cardModalGrid_OneScales': flight.segments.length === 1 ? true : false}
                                            )}>
                                                    {flight.segments.map((flightScale)=>{

                                                        const flightDurationHours = `${flightScale.attributeDetail.attributeDescription.slice(0, -2)}h` === '00h'? " " : `${flightScale.attributeDetail.attributeDescription.slice(0, -2)}h`
                                                     
                                                        const flightDurationMinutes = `${flightScale.attributeDetail.attributeDescription.substring(2)}m`
                                                    return(
                                                            <div className='cardModalBody'>
                                                                <div className='cardModalBody_OriginAndDestiny'>
                                                                    <div className='cardModalBody_OriginAndDestiny_header'>
                                                                        <div className='header_date'>
                                                                                <p className='tittle_informationFlight'>salida de hasta</p>
                                                                                <p className='tittleSub_informationFlight'>{flightScale.productDateTime.dateOfDeparture} </p>
                                                                        </div>
                                                                        <div className='bodyFlightTime_'>
                                                                            <div className='FlightTime'>
                                                                                    <Airplane size="25" color="#004274" variant="Bold"/>
                                                                                    <p>{flightDurationHours} {flightDurationMinutes} Duracion</p>
                                                                            </div>  
                                                                        </div>
                                                                    </div>
                                                                    <div className='cardModalBody_OriginAndDestiny_footer'>
                                                                        <div>
                                                                                <h4 className='OriginAndDestiny-items tittle_informationFlight'>{flightScale.location[0].locationId} </h4>
                                                                                <p className='OriginAndDestiny-items date_hours-informationFlight'>hora de salida</p>
                                                                                <p className='OriginAndDestiny-items date_hours-informationFlight'>{flightScale.productDateTime.timeOfDeparture} </p>
                                                                                <CityAndAirport
                                                                                cityAndAirportClass='OriginAndDestiny-items date_hours-informationFlight'
                                                                                iataCode={flightScale.location[0].locationId}
                                                                                />
                                                                        </div>
                                                                        <div>
                                                                                <h4 className='OriginAndDestiny-items tittle_informationFlight'>{flightScale.location[1].locationId} </h4>
                                                                                <p className='OriginAndDestiny-items date_hours-informationFlight'>hora de llegada</p>
                                                                                <p className='OriginAndDestiny-items date_hours-informationFlight'>{flightScale.productDateTime.timeOfArrival} </p>
                                                                                <CityAndAirport
                                                                                 cityAndAirportClass='OriginAndDestiny-items date_hours-informationFlight'
                                                                                iataCode={flightScale.location[1].locationId}
                                                                                />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='cardModalBody_informationFlight'>
                                                                    <div className='items-tittle_informationFlight'>
                                                                        <div >
                                                                                <p className='tittle_informationFlight'>Número de vuelo</p>
                                                                                <p className='tittleSub_informationFlight'>{flightScale.flightOrtrainNumber} </p>
                                                                        </div>
                                                                    <div >
                                                                            <p className='tittle_informationFlight'>Operado Por</p>
                                                                            <p className='tittleSub_informationFlight'>{flightScale.airline.name}</p>
                                                                           
                                                                    </div>
                                                                        <div className='informationFlight-item'>
                                                                                <p className='tittle_informationFlight'>Avión</p>
                                                                                <p className='tittleSub_informationFlight'>{flightScale.equipment.equipmentType}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    )
                                                    })
                                                    }
                                                    </div>
                                            </div>
                                    </div>
                            </Box>
                    </Modal>
            </div>
            :
            <div/>
            }
                
            </div>
      )
 }

 export default ScaleAirline