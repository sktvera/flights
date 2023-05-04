import React, { useState } from 'react'
import CheckboxIcon from '../CheckboxIcon/CheckboxIcon'
import ScaleAirline from '../ScaleAirline/ScaleAirline'
import NameAirlineApi from '../NameAirlineApi/NameAirlineApi'


import './Assets/styles.css'

const RoundTripGoing = (props) => { 

        const [keyActive, setkeyActive] = useState(0)
        const setRecommendationInformationGoing = props.setRecommendationInformationGoing
        const recommendation = props.recommendation   
        const setFlightSelectedGoing = props.setFlightSelectedGoing
        const segmentFlightRef = props.recommendation.seg.Seg1



return (
        <div>
                {segmentFlightRef.map((segmentFlightRefItem,key)=>{
                                const flight = props.going.find((value)=>value.num == segmentFlightRefItem.refNumber)
                                return(
                                        <div>
                                                <div  className='flightSelectedSegment-items'>
                                                       <div className='containedSelected'>

                                                       <div className='  boxChecboxImgTittle'>
                                                                <div className='flight-going-airlineCheckboxImg'>
                                                                        <div>
                                                                                <CheckboxIcon
                                                                                keys={key}
                                                                                flight={flight}
                                                                                setFlightSelectedGoing={setFlightSelectedGoing}
                                                                                setRecommendationInformationGoing={setRecommendationInformationGoing}
                                                                                recommendation={recommendation}
                                                                                keyActive={keyActive}
                                                                                setkeyActive={setkeyActive}
                                                                                />
                                                                        </div>

                                                                        <div className='flight-going-airline_img'>
                                                                                <img src={`https://pics.avs.io/60/60/${flight.segments[0].companyId.marketingCarrier}.png`} alt={flight.segments[0].companyId.marketingCarrier} />
                                                                        </div>
                                                                        
                                                                </div>
                                                               
                                                                <NameAirlineApi
                                                                flight={flight}
                                                                />
                                                        </div>

                                                       </div>
                                                        <div className='flight_ScaleAirline'>
                                                               {/*  <ScaleAirline
                                                                flight={flight}    
                                                                /> */}
                                                               
                                                        </div>
                                                        <div className='flight_going_'>
                                                                <div className='flight-going-airline'>
                                                                        {flight.segments[1] ?
                                                                        <p className='itemFontSegment' >{flight.segments[1].productDateTime.timeOfArrival}</p>
                                                                        :
                                                                        <p className='itemFontSegment'>{flight.segments[0].productDateTime.timeOfArrival}</p>
                                                                        }
                                                                       
                                                                </div>
                                                        </div>
                                                        
                                                </div>
                                                        
                                        </div>
                                )
                })}
        </div>
)
}
export default RoundTripGoing



