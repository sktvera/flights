import React from 'react'
import { Airplane } from 'iconsax-react'
import './Assets/styles.css'

const FlightChekoutMenuModal = (props) => {

    const oneWay = props.oneWay
    const roundTrip = props.roundTrip
    const InformationFlight = props.InformationFlight
    const setInformationFlight = props.setInformationFlight
    const handleModalInformationFlight = props.handleModalInformationFlight
    const totalPriceJson = props.totalPriceJson
    const passengersSelected = props.passengersSelected
    const FlightGoing = props.FlightGoing ?? []
    const FlightReturn = props.FlightReturn ?? []

  return (
    <>

{oneWay === true && roundTrip === false ?
        <>
                {InformationFlight === true?
                        <div className='informationFlight-selection' onClick={()=>{setInformationFlight(false)}} >
                                 <div className='informationFlight_'>
                                        <div className='informationFlight_Date'>
                                                <p style={{ fontSize: '18px', fontWeight: '300' }}>{FlightGoing[0].productDateTime.dateOfDeparture}</p>
                                        </div>
                                        <div className='informationFlight_Destination'>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightGoing[0].location[0].locationId}</p>
                                                </div>
                                                <div className='airplane'>
                                                        <Airplane size="25" color="#FFFFFF" variant="Bold"/>
                                                </div>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightGoing[FlightGoing.length - 1].location[1].locationId}</p>
                                                </div>
                                        </div>
                                </div>
                              
                        
                {/*LOCATION GOING*/}
                        <div className='informationFlightCotained'>
                                {/*PASSENGERS*/}
                                <div className='informationFlight_ informationFlight_Passengers'>
                                        <div>
                                                <p className='tittlePassengers' style={{ fontSize: '18px', fontWeight: '300' }}>Pasajeros</p>
                                        </div>
                                        <div>
                                                <p className='numerPassengers' style={{ fontSize: '20px', fontWeight: '600' }}>{passengersSelected.adult + passengersSelected.baby +  passengersSelected.boy}</p>
                                        </div>
                                </div>
                                {/*PRICE*/}
                                <div className='informationFlight_'>
                                        <div className='informationFlight_Date'>
                                                <p style={{ fontSize: '18px', fontWeight: '300' }}>Su Reserva Total</p>
                                        </div>
                                        <div>
                                                <p className='totalPrice' style={{ fontSize: '26px', fontWeight: '600' }}>{totalPriceJson}</p>
                                        </div>
                                </div>
                        </div>
                        </div>

                :
                
                        <div className='informationFlight' onClick={handleModalInformationFlight} >
                                
                                <div className='informationFlight_'>
                                        <div className='informationFlight_Date'>
                                                <p style={{ fontSize: '18px', fontWeight: '300' }}>{FlightGoing[0].productDateTime.dateOfDeparture}</p>
                                        </div>
                                        <div className='informationFlight_Destination'>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightGoing[0].location[0].locationId}</p>
                                                </div>
                                                <div className='airplane'>
                                                        <Airplane size="25" color="#004274" variant="Bold"/>
                                                </div>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightGoing[FlightGoing.length - 1].location[1].locationId}</p>
                                                </div>
                                        </div>
                                </div>
                              
                        
                {/*LOCATION GOING*/}
                        <div className='informationFlightCotained'>
                                {/*PASSENGERS*/}
                                <div className='informationFlight_ informationFlight_Passengers'>
                                        <div>
                                                <p className='tittlePassengers' style={{ fontSize: '18px', fontWeight: '300' }}>Pasajeros</p>
                                        </div>
                                        <div>
                                                <p className='numerPassengers' style={{ fontSize: '20px', fontWeight: '600' }}>{passengersSelected.adult + passengersSelected.baby +  passengersSelected.boy}</p>
                                        </div>
                                </div>
                                {/*PRICE*/}
                                <div className='informationFlight_'>
                                        <div className='informationFlight_Date'>
                                                <p style={{ fontSize: '18px', fontWeight: '300' }}>Su Reserva Total</p>
                                        </div>
                                        <div>
                                                <p className='totalPrice' style={{ fontSize: '26px', fontWeight: '600' }}>{totalPriceJson}</p>
                                        </div>
                                </div>
                        </div>
                        </div>
            }
        </>

:

        <>
        {InformationFlight === true?
                <div className='informationFlight-selection'   onClick={()=>{setInformationFlight(false)}}>

                        <div className='informationFlightCotained'>
                                <div className='informationFlight_'>
                                        <div className='informationFlight_Date'>
                                                <p style={{ fontSize: '18px', fontWeight: '300' }}>{FlightGoing[0].productDateTime.dateOfDeparture}</p>
                                        </div>
                                        <div className='informationFlight_Destination'>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightGoing[0].location[0].locationId}</p>
                                                </div>
                                                <div className='airplane'>
                                                        <Airplane size="25" color="#FFFFFF" variant="Bold"/>
                                                </div>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightGoing[FlightGoing.length - 1].location[1].locationId}</p>
                                                </div>
                                        </div>
                                </div>
                                {/*LOCATION RETURN*/}
                                <div className='informationFlight_'>
                                        <div className='informationFlight_Date'>
                                                <p style={{ fontSize: '18px', fontWeight: '300' }}>{FlightReturn[0].productDateTime.dateOfDeparture}</p>
                                        </div>
                                        <div className='informationFlight_Destination'>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightReturn[0].location[0].locationId}</p>
                                                </div>
                                                <div className='airplane'>
                                                        <Airplane size="25" color="#FFFFFF" variant="Bold"/>
                                                </div>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightReturn[FlightReturn.length - 1].location[1].locationId}</p>  
                                                </div>
                                        </div>
                                </div>
                        </div>
                {/*LOCATION GOING*/}
                        <div className='informationFlightCotained'>
                                {/*PASSENGERS*/}
                                <div className='informationFlight_ informationFlight_Passengers'>
                                        <div>
                                                <p className='tittlePassengers' style={{ fontSize: '18px', fontWeight: '300' }}>Pasajeros</p>
                                        </div>
                                        <div>
                                                <p className='numerPassengers' style={{ fontSize: '20px', fontWeight: '600' }}>{passengersSelected.adult + passengersSelected.baby +  passengersSelected.boy}</p>
                                        </div>
                                </div>
                                {/*PRICE*/}
                                <div className='informationFlight_'>
                                        <div className='informationFlight_Date'>
                                                <p style={{ fontSize: '18px', fontWeight: '300' }}>Su Reserva Total</p>
                                        </div>
                                        <div>
                                                <p className='totalPrice' style={{ fontSize: '26px', fontWeight: '600' }}>{totalPriceJson}</p>
                                        </div>
                                </div>
                        </div>
                       
                </div>
        :
                <div className='informationFlight'  onClick={handleModalInformationFlight}>
                        <div className='informationFlightCotained'>
                                <div className='informationFlight_'>
                                        <div className='informationFlight_Date'>
                                                <p style={{ fontSize: '18px', fontWeight: '300' }}>{FlightGoing[0].productDateTime.dateOfDeparture}</p>
                                        </div>
                                        <div className='informationFlight_Destination'>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightGoing[0].location[0].locationId}</p>
                                                </div>
                                                <div className='airplane'>
                                                        <Airplane size="25" color="#004274" variant="Bold"/>
                                                </div>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightGoing[FlightGoing.length - 1].location[1].locationId}</p>
                                                </div>
                                        </div>
                                </div>
                                {/*LOCATION RETURN*/}
                                <div className='informationFlight_'>
                                        <div className='informationFlight_Date'>
                                                <p style={{ fontSize: '18px', fontWeight: '300' }}>{FlightReturn[0].productDateTime.dateOfDeparture}</p>
                                        </div>
                                        <div className='informationFlight_Destination'>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightReturn[0].location[0].locationId}</p>
                                                </div>
                                                <div className='airplane'>
                                                        <Airplane size="25" color="#004274" variant="Bold"/>
                                                </div>
                                                <div>
                                                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{FlightReturn[FlightReturn.length - 1].location[1].locationId}</p>  
                                                </div>
                                        </div>
                                </div>
                        </div>
                {/*LOCATION GOING*/}
                        <div className='informationFlightCotained'>
                                {/*PASSENGERS*/}
                                <div className='informationFlight_ informationFlight_Passengers'>
                                        <div>
                                                <p className='tittlePassengers' style={{ fontSize: '18px', fontWeight: '300' }}>Pasajeros</p>
                                        </div>
                                        <div>
                                                <p className='numerPassengers' style={{ fontSize: '20px', fontWeight: '600' }}>{passengersSelected.adult + passengersSelected.baby +  passengersSelected.boy}</p>
                                        </div>
                                </div>
                                {/*PRICE*/}
                                <div className='informationFlight_'>
                                        <div className='informationFlight_Date'>
                                                <p style={{ fontSize: '18px', fontWeight: '300' }}>Su Reserva Total</p>
                                        </div>
                                        <div>
                                                <p className='totalPrice' style={{ fontSize: '26px', fontWeight: '600' }}>{totalPriceJson}</p>
                                        </div>
                                </div>
                        </div>
                </div>
        }
</>
} 
      
    </>
  )
}

export default FlightChekoutMenuModal
