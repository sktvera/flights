import React, { useEffect, useState } from 'react'
import RateClassCardDesing from '../../Components/RateClassCardDesing/RateClassCardDesing'
import { useNavigate } from 'react-router-dom'
import { useLocation} from 'react-router';
import { Airplane } from 'iconsax-react'
import wellezy from './Assets/Img/wellezy.png'
import axios from 'axios'
import './Assets/styles.css'


const RateClassSelected = (props) => {
    const navigate = useNavigate()
    const location = useLocation();
    console.log({location})
    
    const oneWay = location.state.oneWay
    const roundTrip = location.state.roundTrip

    const passengersSelected =location.state.passengersSelected
    const apiAdult =location.state.passengersSelected.adult
    const apiChild =location.state.passengersSelected.boy
    const apiBaby =location.state.passengersSelected.baby
    const recommendationInformationGoing = location.state.recommendationInformationGoing.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.cabinProduct.rbd
   
    //API
    const FlightGoing = location.state.FlightSelectedGoing.segments
    const FlightReturn = location.state.FlightSelectedReturn.segments
 
    const elementsApi = []

    if(oneWay === true && roundTrip === false ){

        FlightGoing.map((FlightGoing,key)=>{
            elementsApi.push({
                "group":key + 1,
                "from":FlightGoing.location[0].locationId,
                "to":FlightGoing.location[1].locationId,
                "company":`${FlightGoing.companyId.marketingCarrier}`,
                "flightNumber":`${FlightGoing.flightOrtrainNumber}`,
                "class":recommendationInformationGoing,
                "hour":`${FlightGoing.productDateTime.dateOfDeparture} 00:00:00`
            })
        })

    }else{

        FlightGoing.map((FlightGoing,key)=>{
            elementsApi.push({
                "group":key + 1,
                "from":FlightGoing.location[0].locationId,
                "to":FlightGoing.location[1].locationId,
                "company":`${FlightGoing.companyId.marketingCarrier}`,
                "flightNumber":`${FlightGoing.flightOrtrainNumber}`,
                "class":recommendationInformationGoing,
                "hour":`${FlightGoing.productDateTime.dateOfDeparture} 00:00:00`
            })
        })

        FlightReturn.map((FlightReturn, key)=>{
            elementsApi.push({
                        "group":FlightGoing.length + key + 1,
                        "from":FlightReturn.location[0].locationId,
                        "to":FlightReturn.location[1].locationId,
                        "company":`${FlightReturn.companyId.marketingCarrier}`,
                        "flightNumber":`${FlightReturn.flightOrtrainNumber}`,
                        "class":recommendationInformationGoing,
                        "hour":`${FlightReturn.productDateTime.dateOfDeparture} 00:00:00`
                    })
        }) 
        
 }
    //data api
    const [upsell, setUpsell] = useState([])

    const[selectionRateClassGoing,setSelectionRateClassGoing]=useState()

    const[selectionRateClassReturn,setSelectionRateClassReturn]=useState()
    //ORIGIN
    const[selectedRateClassBoolean,setSelectedRateClassBoolean]=useState(false)
    //DESTINY
    const[selectedRateClassBooleanDestiny,setSelectedRateClassBooleanDestiny]=useState(false)

    useEffect(()=> {
  
        const apiRateClass = async ()=>{
          const url = 'https://travelflight.pdtcomunicaciones.com/api/upsell';
            const result = await axios.post(url,
                {
                    "adult": `${apiAdult}`,
                    "child":`${apiChild}`,
                    "baby":`${apiBaby}`,
                    "segments": 
                            elementsApi
                }
          );
          setUpsell(result.data)
          console.log(result.data)
            
        }
        apiRateClass()
    },[]);

    const [detailRateClassSecondOrigin, setDetailRateClassSecondOrigin] = useState(true)
    const [detailRateClassFirstOrigin, setDetailRateClassFirstOrigin] = useState(false)

    const [detailRateClassSecondDestiny, setDetailRateClassSecondDestiny] = useState(true)
    const [detailRateClassFirstDestiny, setDetailRateClassFirstDestiny] = useState(false)

    

//ORIGIN
//open screen rate class Origin
const handleSelectedRateClassFirstOrigin = ()=>{
    setDetailRateClassFirstOrigin(true)
    setDetailRateClassSecondOrigin(false)
    setSelectedRateClassBoolean(false)
}
//close screen rate class Origin
const handleSelectedRateClassSecondOrigin = ()=>{
    setDetailRateClassFirstOrigin(false)
    setDetailRateClassSecondOrigin(true)
}
const handleShowRateClass = ()=>{
    setDetailRateClassFirstOrigin(false)
    setDetailRateClassSecondOrigin(true)
    setSelectedRateClassBoolean(true)
}
//DESTINY
//open screen rate class Destiny
const handleSelectedRateClassFirstDestiny = ()=>{
    setDetailRateClassFirstDestiny(true)
    setDetailRateClassSecondDestiny(false)
    setSelectedRateClassBooleanDestiny(false)
}
//close screen rate class Destiny
const handleSelectedRateClassSecondDestiny = ()=>{
    setDetailRateClassFirstDestiny(false)
    setDetailRateClassSecondDestiny(true)
}

const handleShowRateClassDestiny = ()=>{
    setDetailRateClassFirstDestiny(false)
    setDetailRateClassSecondDestiny(true)
    setSelectedRateClassBooleanDestiny(true)
}

const handleNavigation =  () => {
    navigate(`/flightsCheckout`,{state: {selectionRateClassReturn, selectionRateClassGoing, passengersSelected}})
}

if(upsell.length === 0 ){
    return(
<div>
<div style={{ width: '100%', height: '85px' , backgroundColor: '#004274'}} /> 

<div className='loader'>           
<div class="container">
    <div class="load">
        <img
        className='img' 
        src={wellezy} 
        alt="agregar equipaje" />
        <div className='containerBalls'>
        <div class="balls"></div>
        <div class="balls"></div>
        <div class="balls"></div>
        </div>
    </div>
</div>
</div>
</div>
    )
}else{
return (
        <div>

           
            <div style={{ width: '100%', height: '85px' , backgroundColor: '#004274'}} /> 
 {oneWay === true && roundTrip === false ?

            <div className= {detailRateClassFirstOrigin ? 'rateClassTrueOneWay' : "rateClassContendDesingOneWay"}>
                <div className='rateClassDesing-item'>
                    <div className='rateClassGuide'>
                        <div className='rateClassGuide-item rateClassGuide-itemDivider'>
                            <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>
                                resumen de viaje
                            </p>
                        </div>
                        <div className='rateClassGuide-item'>
                            <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>editar seleccion</p>
                        </div>
                    </div>
                </div>
                <div className='rateClassDesing-item informationRateClass'>
                    <div className='rateClassDesing-itemBorder'>
                        <div className='rateClassDesing-structure'>
                            <div className='rateClassDesing-structure-tittlesFlights'>
                                <div className='tittlesFlights-item itemsDirection'>
                                    <div className='dateAndIcon'>
                                        <div className='dateAndDirection'>
                                            <div>
                                                <Airplane size="25" color="#004274" variant="Bold"/>
                                            </div>
                                            <div>
                                                <p style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '18px', textTransform: 'capitalize' }}>ida</p>
                                            </div>
                                        </div>
                                        <div> <p>{FlightGoing[0].productDateTime.dateOfDeparture}</p></div>
                                    </div>
                                </div>
                                <div className='tittlesFlights-item'>
                                    <p>{FlightGoing[0].location[0].locationId}</p>
                                </div>
                                <div className='tittlesFlights-item'>
                                    <p>{FlightGoing[0].location[1].locationId}</p>
                                </div>
                            </div>
                            <div className='rateClassDesing-structure-tittlesFlights'>
                                <div className='tittlesFlights-item airlineImgAndTittle rateClassNextToImg'>
                                    <div className='flight-going-airline_img'>
                                        <img src={`https://travelflight.pdtcomunicaciones.com/${FlightGoing[0].airline.image}`} alt={FlightGoing[0].airline.codeiata} />
                                    </div>
                                    <p>{FlightGoing[0].airline.name}</p>
                                </div>
                                <div className='tittlesFlights-item'>
                                    <p>{FlightGoing[0].productDateTime.timeOfDeparture}</p>
                                </div>
                                <div className='tittlesFlights-item FlightDuration FlightDuration_'>
                                    {FlightGoing.length >= 1 ?
                                     <p>{FlightGoing[1].productDateTime.timeOfArrival}</p>
                                     :
                                     <p>{FlightGoing[0].productDateTime.timeOfArrival}</p>
                                }
                                   
                                    <p>duracion</p>
                                </div>
                            </div>
                            {detailRateClassFirstOrigin === false && detailRateClassFirstDestiny === false ?
                                <div onClick={handleSelectedRateClassFirstOrigin} className='selectedRateClass'>
                                    <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>ver mas</p>
                                </div>
                            :
                                <div onClick={handleSelectedRateClassSecondOrigin} className='selectedRateClass'>
                                    <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>ver menos</p>
                                </div>
                            } 
                        </div>
                        <div className='rateClassDesing-structure seeRateClass'>
                            {selectedRateClassBoolean ? 
                               <p>{selectionRateClassGoing}</p>
                               :
                                <p>Seleccionar clase</p>
                            }
                        </div>
                    </div>
                </div>
                {detailRateClassFirstOrigin?
                    <div className='RateClassCard '>
                        {upsell.families.map((families,key,array)=>{
                            
                            return families.type[0].fareBasisDetails.discTktDesignator === "ADT" ? (
                                <div>
                                    <RateClassCardDesing
                                    families={families}
                                    setSelectionRateClassGoing={setSelectionRateClassGoing}
                                    keys={key}
                                    array={array}
                                    handleShowRateClass={handleShowRateClass}
                                    going={true}
                                    />
                                </div>
                            ):null
                        })}
                    </div>
                    :
                    <div className='falseRateClass'/>
                }

                <div className='rateClassDesing-item navigationRateClass'>
                    <div className='rateClassDesing-Navigate'>
                        <div className='rateClassDesing-Navigate-item'>
                            <div className='priceBooking'>
                                <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>su reserva total:</p>
                                <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', textTransform: 'capitalize' }}>precio</p>
                            </div>
                        </div>
                        {selectedRateClassBoolean ?
                        <div className='rateClassDesing-Navigate-item sendDataRateClass'>
                        <div onClick={handleNavigation} style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}  > continuar personalizando su viaje </div>
                        </div>
                        :

                        <div className='rateClassDesing-Navigate-item '>
                            <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>continuar personalizando su viaje</p>
                        </div>
                    }
                        

                        
                    </div>
                </div>

            </div>

: //ROUNDTRIP

            <div  className= {detailRateClassFirstOrigin /* || detailRateClassFirstDestiny  */? 'rateClassDesingTrueRoundTrip' : 'rateClassContendDesing'}>
                <div className='rateClassDesing-item'>
                    <div className='rateClassGuide'>
                        <div className='rateClassGuide-item rateClassGuide-itemDivider'>
                            <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>
                                resumen de viaje
                            </p>
                        </div>
                        <div className='rateClassGuide-item'>
                            <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>editar seleccion</p>
                        </div>
                    </div>
                </div>
                <div className='rateClassDesing-item informationRateClass'>
                    <div className='rateClassDesing-itemBorder'>
                        <div className='rateClassDesing-structure'>
                            <div className='rateClassDesing-structure-tittlesFlights'>
                                <div className='tittlesFlights-item itemsDirection'>
                                    <div className='dateAndIcon'>
                                        <div className='dateAndDirection'>
                                            <div>
                                                <Airplane size="25" color="#004274" variant="Bold"/>
                                            </div>
                                            <div>
                                                <p style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '18px', textTransform: 'capitalize' }}>ida</p>
                                            </div>
                                        </div>
                                        <div> <p>{FlightGoing[0].productDateTime.dateOfDeparture}</p></div>
                                    </div>
                                </div>
                                <div className='tittlesFlights-item'>
                                    <p>{FlightGoing[0].location[0].locationId}</p>
                                </div>
                                <div className='tittlesFlights-item'>
                                    <p>{FlightGoing[0].location[1].locationId}</p>
                                </div>
                            </div>
                            <div className='rateClassDesing-structure-tittlesFlights'>
                                <div className='tittlesFlights-item airlineImgAndTittle rateClassNextToImg'>
                                    <div className='flight-going-airline_img'>
                                        <img src={`https://travelflight.pdtcomunicaciones.com/${FlightGoing[0].airline.image}`} alt={FlightGoing[0].airline.codeiata} />
                                    </div>
                                    <p>{FlightGoing[0].airline.name}</p>
                                </div>
                                <div className='tittlesFlights-item'>
                                    <p>{FlightGoing[0].productDateTime.timeOfDeparture}</p>
                                </div>
                                <div className='tittlesFlights-item FlightDuration FlightDuration_'>
                                    <p>{FlightGoing[0].productDateTime.timeOfArrival}</p>
                                    <p>duracion</p>
                                </div>
                            </div>
                            {detailRateClassFirstOrigin === false  && detailRateClassFirstDestiny === false?
                                <div onClick={handleSelectedRateClassFirstOrigin} className='selectedRateClass'>
                                    <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>ver mas</p>
                                </div>
                            :
                                <div onClick={handleSelectedRateClassSecondOrigin} className='selectedRateClass'>
                                    <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>ver menos</p>
                                </div>
                            } 
                        </div>
                        <div className='rateClassDesing-structure seeRateClass'>
                            {selectedRateClassBoolean ? 
                                 <p>{selectionRateClassGoing}</p>
                               :
                                <p>Seleccionar clase</p>
                            }
                        </div>
                    </div>
                </div>
                {detailRateClassFirstOrigin?
                    <div className='RateClassCard '>
                        {upsell.families.map((families,key)=>{
                            return families.type[0].fareBasisDetails.discTktDesignator === "ADT" ?(
                                <div>
                                    <RateClassCardDesing
                                    families={families}
                                    setSelectionRateClassGoing={setSelectionRateClassGoing}
                                    keys={key}
                                    handleShowRateClass={handleShowRateClass}
                                    going={true}
                                    />
                                </div>
                            ):null
                        })}
                    </div>
                    :
                    <div className='falseRateClass'/>
                }

                
                <div className='rateClassDesing-item informationRateClass'>
                    <div className='rateClassDesing-itemBorder'>
                        <div className='rateClassDesing-structure'>
                            <div className='rateClassDesing-structure-tittlesFlights'>
                                <div className='tittlesFlights-item itemsDirection'>
                                    <div className='dateAndIcon'>
                                        <div className='dateAndDirection'>
                                            <div>
                                                <Airplane size="25" color="#004274" variant="Bold"/>
                                            </div>
                                            <div>
                                            <p style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '18px', textTransform: 'capitalize' }}>regreso</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{FlightReturn[0].productDateTime.dateOfDeparture}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='tittlesFlights-item'>
                                    <p>{FlightReturn[0].location[0].locationId}</p>
                                </div>
                                <div className='tittlesFlights-item'>
                                    <p>{FlightReturn[0].location[1].locationId}</p>
                                </div>
                            </div>
                            <div className='rateClassDesing-structure-tittlesFlights'>
                                <div className='tittlesFlights-item airlineImgAndTittle rateClassNextToImg'>
                                    <div className='flight-going-airline_img'>
                                        <img src={`https://travelflight.pdtcomunicaciones.com/${FlightReturn[0].airline.image}`} alt={FlightReturn[0].airline.codeiata} />
                                    </div>
                                    <p>{FlightReturn[0].airline.name}</p>
                                </div>
                                <div className='tittlesFlights-item'>
                                    <p>{FlightReturn[0].productDateTime.timeOfDeparture}</p>
                                </div>
                                <div className='tittlesFlights-item FlightDuration FlightDuration_'>
                                    {FlightReturn.length >= 1 ?
                                     <p>{FlightReturn[1].productDateTime.timeOfArrival}</p>
                                     :
                                     <p>{FlightReturn[0].productDateTime.timeOfArrival}</p>
                                    }
                                   
                                    <p>duracion</p>
                                </div>
                            </div>
                            {detailRateClassFirstDestiny === false && detailRateClassFirstOrigin === false ?
                                <div onClick={handleSelectedRateClassFirstDestiny} className='selectedRateClass'>
                                    <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>ver mas</p>
                                </div>
                            :
                                <div onClick={handleSelectedRateClassSecondDestiny} className='selectedRateClass'>
                                    <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>ver menos</p>
                                </div>
                            } 
                        </div>
                        <div className='rateClassDesing-structure seeRateClass'>
                            {selectedRateClassBooleanDestiny ? 
                                    <p>{selectionRateClassReturn}</p>
                                    :
                                    <p>Seleccionar clase</p>
                                }
                        </div>
                    </div>
                </div>
                {detailRateClassFirstDestiny?
                    <div className='RateClassCard '>
                        {upsell.families.map((families,keyss)=>{
                            return families.type[0].fareBasisDetails.discTktDesignator === "ADT" ?(
                                <div>
                                    <RateClassCardDesing
                                    families={families}
                                    handleShowRateClassDestiny={handleShowRateClassDestiny}
                                    setSelectionRateClassReturn={setSelectionRateClassReturn}
                                    keyss={keyss}
                                    returnn={true}
                                    />
                                </div>
                                ):null
                        })}
                    </div>
                    :
                    <div className='falseRateClass'/>
                }
                <div className='rateClassDesing-item navigationRateClass'>
                    <div className='rateClassDesing-Navigate'>
                        <div className='rateClassDesing-Navigate-item'>
                            <div className='priceBooking'>
                                <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>su reserva total:</p>
                                <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', textTransform: 'capitalize' }}>precio</p>
                            </div>
                        </div>
                        {selectedRateClassBoolean && selectedRateClassBooleanDestiny ?
                        <div className='rateClassDesing-Navigate-item sendDataRateClass'>
                        <p onClick={handleNavigation} style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}  > continuar personalizando su viaje </p>
                        </div>
                        :

                        <div className='rateClassDesing-Navigate-item '>
                            <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', textTransform: 'capitalize' }}>continuar personalizando su viaje</p>
                        </div>
                    }
                        

                        
                    </div>
                </div>
            </div>
        }
        </div>
)
}
}

export default RateClassSelected
