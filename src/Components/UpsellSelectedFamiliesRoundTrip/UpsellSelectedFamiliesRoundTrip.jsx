
import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import classnames from 'classnames';
import axios from 'axios'

import '../UpsellSelectedFamiliesOneWay/Assets/styles.css'
import ItemReady from '../UpsellSelectedFamiliesOneWay/Assets/Img/ItemReady.png'
import Selectedluggage from '../UpsellSelectedFamiliesOneWay/Assets/Img/Selectedluggage.png'


import ActiveLuggageBasicOff from '../UpsellSelectedFamiliesOneWay/Assets/Img/ActiveLuggageBasicOff.png'
import ActiveLuggageBasicOn from '../UpsellSelectedFamiliesOneWay/Assets/Img/ActiveLuggageBasicOn.png'
import ActiveLuggageBigOff from '../UpsellSelectedFamiliesOneWay/Assets/Img/ActiveLuggageBigOff.png'
import ActiveLuggageBigOn from '../UpsellSelectedFamiliesOneWay/Assets/Img/ActiveLuggageBigOn.png'
import ActiveLuggageMediumOff from '../UpsellSelectedFamiliesOneWay/Assets/Img/ActiveLuggageMediumOff.png'
import ActiveLuggageMediumOn from '../UpsellSelectedFamiliesOneWay/Assets/Img/ActiveLuggageMediumOn.png'
import FamiliesButtonOrigin from '../FamiliesButtonOrigin/FamiliesButtonOrigin';






const UpsellSelectedFamiliesRoundTrip = ({recommendation, passengersSelected, FlightSelectedGoing, FlightSelectedReturn, setDataCabin, setDataComponents, setOpenLuggageFamilies, setTittleFamilies}) => {

    const FlightGoing = FlightSelectedGoing.segments
    const FlightReturn = FlightSelectedReturn.segments
    const goingBookingClass = recommendation.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.cabinProduct.length > 1 ? recommendation.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.cabinProduct[0].rbd : recommendation.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.cabinProduct.rbd

/* 
*---------ITINERARY GOING AND RETURN-------- 
*/

const itineraryGoingReturnConditional  = FlightGoing.length >= 2 ? 
(FlightGoing.length === 2 ? 
      [
        {
        "group": FlightGoing.indexOf(FlightGoing[0]) + 1 ,
        "from": `${FlightGoing[0].location[0].locationId}`,
        "to": `${FlightGoing[0].location[1].locationId}`,
        "company":`${FlightGoing[0].companyId.marketingCarrier}`,
        "flightNumber":`${FlightGoing[0].flightOrtrainNumber}`,
        "class":`${goingBookingClass}`,
        "hour": `${FlightGoing[0].productDateTime.dateOfDeparture} 00:00:00`,
        },
       
          {
            "group": FlightGoing.indexOf(FlightGoing[1]) + 1 ,
            "from": `${FlightGoing[1].location[0].locationId}`,
            "to": `${FlightGoing[1].location[1].locationId}`,
            "company":`${FlightGoing[1].companyId.marketingCarrier}`,
            "flightNumber":`${FlightGoing[1].flightOrtrainNumber}`,
            "class":`${goingBookingClass}`,
            "hour": `${FlightGoing[1].productDateTime.dateOfDeparture} 00:00:00`,
            }  
      ]
    :
      [
        {
        "group": FlightGoing.indexOf(FlightGoing[0]) + 1 ,
        "from": `${FlightGoing[0].location[0].locationId}`,
        "to": `${FlightGoing[0].location[1].locationId}`,
        "company":`${FlightGoing[0].companyId.marketingCarrier}`,
        "flightNumber":`${FlightGoing[0].flightOrtrainNumber}`,
        "class":`${goingBookingClass}`,
        "hour": `${FlightGoing[0].productDateTime.dateOfDeparture} 00:00:00`,
        }
       ,
          {
            "group": FlightGoing.indexOf(FlightGoing[1]) + 1 ,
            "from": `${FlightGoing[1].location[0].locationId}`,
            "to": `${FlightGoing[1].location[1].locationId}`,
            "company":`${FlightGoing[1].companyId.marketingCarrier}`,
            "flightNumber":`${FlightGoing[1].flightOrtrainNumber}`,
            "class":`${goingBookingClass}`,
            "hour": `${FlightGoing[1].productDateTime.dateOfDeparture} 00:00:00`,
            },
            {
              "group": FlightGoing.indexOf(FlightGoing[2]) + 1 ,
              "from": `${FlightGoing[2].location[0].locationId}`,
              "to": `${FlightGoing[2].location[1].locationId}`,
              "company":`${FlightGoing[2].companyId.marketingCarrier}`,
              "flightNumber":`${FlightGoing[2].flightOrtrainNumber}`,
              "class":`${goingBookingClass}`,
              "hour": `${FlightGoing[2].productDateTime.dateOfDeparture} 00:00:00`,
              }
      ]
  )
: 
[
  {
  "group": FlightGoing.indexOf(FlightGoing[0]) + 1 ,
  "from": `${FlightGoing[0].location[0].locationId}`,
  "to": `${FlightGoing[0].location[1].locationId}`,
  "company":`${FlightGoing[0].companyId.marketingCarrier}`,
  "flightNumber":`${FlightGoing[0].flightOrtrainNumber}`,
  "class":`${goingBookingClass}`,
  "hour": `${FlightGoing[0].productDateTime.dateOfDeparture} 00:00:00`,
  }
];

const handleitineraryReturn =()=>{
    if(FlightReturn.length === 1){
        itineraryGoingReturnConditional.push({
            "group": FlightGoing.length + 1 ,
            "from": `${FlightReturn[0].location[0].locationId}`,
            "to": `${FlightReturn[0].location[1].locationId}`,
            "company":`${FlightReturn[0].companyId.marketingCarrier}`,
            "flightNumber":`${FlightReturn[0].flightOrtrainNumber}`,
            "class":`${goingBookingClass}`,
            "hour": `${FlightReturn[0].productDateTime.dateOfDeparture} 00:00:00`,
            })
    }
    if(FlightReturn.length >= 2){
        if(FlightReturn.length === 2){
            itineraryGoingReturnConditional.push({
            "group": FlightGoing.length + 1 ,
            "from": `${FlightReturn[0].location[0].locationId}`,
            "to": `${FlightReturn[0].location[1].locationId}`,
            "company":`${FlightReturn[0].companyId.marketingCarrier}`,
            "flightNumber":`${FlightReturn[0].flightOrtrainNumber}`,
            "class":`${goingBookingClass}`,
            "hour": `${FlightReturn[0].productDateTime.dateOfDeparture} 00:00:00`,
          })
          itineraryGoingReturnConditional.push({
            "group": FlightGoing.length + 2 ,
            "from": `${FlightReturn[1].location[0].locationId}`,
            "to": `${FlightReturn[1].location[1].locationId}`,
            "company":`${FlightReturn[1].companyId.marketingCarrier}`,
            "flightNumber":`${FlightReturn[1].flightOrtrainNumber}`,
            "class":`${goingBookingClass}`,
            "hour": `${FlightReturn[1].productDateTime.dateOfDeparture} 00:00:00`,
            })

        }else{
            itineraryGoingReturnConditional.push({
                "group": FlightGoing.length + 1 ,
                "from": `${FlightReturn[0].location[0].locationId}`,
                "to": `${FlightReturn[0].location[1].locationId}`,
                "company":`${FlightReturn[0].companyId.marketingCarrier}`,
                "flightNumber":`${FlightReturn[0].flightOrtrainNumber}`,
                "class":`${goingBookingClass}`,
                "hour": `${FlightReturn[0].productDateTime.dateOfDeparture} 00:00:00`,
              })
              itineraryGoingReturnConditional.push({
                "group": FlightGoing.length + 2 ,
                "from": `${FlightReturn[1].location[0].locationId}`,
                "to": `${FlightReturn[1].location[1].locationId}`,
                "company":`${FlightReturn[1].companyId.marketingCarrier}`,
                "flightNumber":`${FlightReturn[1].flightOrtrainNumber}`,
                "class":`${goingBookingClass}`,
                "hour": `${FlightReturn[1].productDateTime.dateOfDeparture} 00:00:00`,
                })
                itineraryGoingReturnConditional.push({
                    "group": FlightGoing.length + 3 ,
                    "from": `${FlightReturn[2].location[0].locationId}`,
                    "to": `${FlightReturn[2].location[1].locationId}`,
                    "company":`${FlightReturn[2].companyId.marketingCarrier}`,
                    "flightNumber":`${FlightReturn[2].flightOrtrainNumber}`,
                    "class":`${goingBookingClass}`,
                    "hour": `${FlightReturn[2].productDateTime.dateOfDeparture} 00:00:00`,
                    })
        }
    }
}
handleitineraryReturn()
/* 
*---------END-------- 
*/



    /* const goingCompanyRecommendation = Array.isArray(recommendation.paxFareProduct[0].paxFareDetail.codeShareDetails) === true ? recommendation.paxFareProduct[0].paxFareDetail.codeShareDetails[0].company : recommendation.paxFareProduct[0].paxFareDetail.codeShareDetails.company; */
    const fareType = Array.isArray( recommendation.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.fareProductDetail.fareType  ) === true ? recommendation.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.fareProductDetail.fareType[0] : recommendation.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.fareProductDetail.fareType

const [dataUpsell, setDataUpsell] = useState()


const [activeGoingBag, setActiveGoingBag] = useState(false)
const [selectPlan, setSelectPlan] = useState(false)



    useEffect(()=> {
        const apiUpsell = async ()=>{
        const url = 'https://travelflight.pdtcomunicaciones.com/api/upsell';
        const result = await axios.post(url,{
            "adult": passengersSelected.adult,
            "child":passengersSelected.boy,
            "baby":passengersSelected.baby,
           /*  "fare":`${fareType}`, */
           "fare":`RP`,
            "bag":false,
            "segments":itineraryGoingReturnConditional
        })
        setDataUpsell(result.data)
      
                      }
                      apiUpsell()
                      },[dataUpsell]);

                      const handleActiveGoing =()=>{
                        setActiveGoingBag(true)
                      }
                      const handleActiveReturn =()=>{
                        setActiveGoingBag(false)
                      }

                   
                      if(dataUpsell === undefined){
                        return(
                          <div>
                              <Box sx={{ width: '100%' }}>
                                  <LinearProgress />
                              </Box>
                          </div>
                        )
                      }else{
                      
                        return (
                          <div className='contained-items-bodyAndFooterCards'>
                              <div className='selectedCardsSegments'>

                              {
/*
*---------------------GOING CARD-------------------------------
*/
}  
                                <div className='cardFamilies'>
                                      <div className='buttons-tittleBody'>
                                          <div style={{paddingLeft:'20px',justifyContent:'flex-start' }} className='tittleBody'> 
                                              <p className='texFamilies-Strong'>Tarifas Ida</p>
                                          </div>


                                          <FamiliesButtonOrigin
                                          adult={passengersSelected.adult}
                                          child={passengersSelected.child}
                                          baby={passengersSelected.baby}
                                          itineraryGoingReturnConditional={itineraryGoingReturnConditional}
                                          />


                                      </div>
                                      <div className='tittle-cardFamilies'>
                                          <div className='contained-warningFamilies'>
                                          <div className='bodycard-containedBody-tittleAndInfoFamilies'>
                                            <div className='tittle-bodyCards-infoFamilies'>
                                                <p>Equipaje</p>
                                            </div>
                                            <div className='containedLuggage'>
                                                <div className='containedLuggage-center'>
                                                    <div>
                                                        <div className='selectPlan-addLuggage_img'> <img src={ActiveLuggageBasicOn} alt="agregar equipaje" /></div>
                                                        <div><p>Bolso o mochila pequena</p></div>
                                                    </div>
                                                </div>
                                                <div className='containedLuggage-center'>
                                                    <div>
                                                        <div className='selectPlan-addLuggage_img'> <img src={ActiveLuggageMediumOn} alt="agregar equipaje" /></div>
                                                        <div><p>Equipaje de mano 10kg</p></div>
                                                    </div>
                                                </div>
                                                <div className='containedLuggage-center'>
                                                    <div>
                                                        <div className='selectPlan-addLuggage_img'> <img src={ActiveLuggageBigOn} alt="agregar equipaje" /></div>
                                                        <div><p>1 equipaje de bodeba 25kg</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bodycard-containedBody-tittleAndInfoFamilies'>
                                            <div className='tittle-bodyCards-infoFamilies'>
                                                <p>Servicios Adicionales</p>
                                            </div>
                                            <div className='contained-AddServices'>
                                                <div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                          </div>
                                          <div className='detailSelectedSegments  details-tittle'>
                                              <p>Más detalles</p>
                                          </div>
                                      </div>
                                  </div>
{
/*
*---------------------RETURN CARD-------------------------------
*/
}
                                  <div className='cardFamilies'>
                                      <div className='buttons-tittleBody'>
                                          <div style={{paddingLeft:'20px',justifyContent:'flex-start' }} className='tittleBody'> 
                                              <p className='texFamilies-Strong'>Tarifas Vuelta</p>
                                          </div>
                                          <FamiliesButtonOrigin
                                          adult={passengersSelected.adult}
                                          child={passengersSelected.child}
                                          baby={passengersSelected.baby}
                                          itineraryGoingReturnConditional={itineraryGoingReturnConditional}
                                          />
                                      </div>
                                      <div className='tittle-cardFamilies'>
                                          <div className='contained-warningFamilies'> 
                                          <div className='bodycard-containedBody-tittleAndInfoFamilies'>
                                            <div className='tittle-bodyCards-infoFamilies'>
                                                <p>Equipaje</p>
                                            </div>
                                            <div className='containedLuggage'>
                                                <div className='containedLuggage-center'>
                                                    <div>
                                                        <div className='selectPlan-addLuggage_img'> <img src={ActiveLuggageBasicOn} alt="agregar equipaje" /></div>
                                                        <div><p>Bolso o mochila pequena</p></div>
                                                    </div>
                                                </div>
                                                <div className='containedLuggage-center'>
                                                    <div>
                                                        <div className='selectPlan-addLuggage_img'> <img src={ActiveLuggageMediumOn} alt="agregar equipaje" /></div>
                                                        <div><p>Equipaje de mano 10kg</p></div>
                                                    </div>
                                                </div>
                                                <div className='containedLuggage-center'>
                                                    <div>
                                                        <div className='selectPlan-addLuggage_img'> <img src={ActiveLuggageBigOn} alt="agregar equipaje" /></div>
                                                        <div><p>1 equipaje de bodeba 25kg</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bodycard-containedBody-tittleAndInfoFamilies'>
                                            <div className='tittle-bodyCards-infoFamilies'>
                                                <p>Servicios Adicionales</p>
                                            </div>
                                            <div className='contained-AddServices'>
                                                <div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                    <div className='warningFamilies'>
                                                        <div className='ItemReady_img'>
                                                            <img src={ItemReady} alt="ItemReady" />
                                                        </div>
                                                        <div>
                                                            <p className='warning-Item'>maletas ida: {/* {families[0].bag[0].bagAllowanceDetails.baggageQuantity} */}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                          </div>
                                          <div className='detailSelectedSegments  details-tittle'>
                                              <p>Más detalles</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className='items-bodyAndFooterCards'>
                                <div className='itemFooter info-FooterTotalprice'>
                                    <div className='totalTittle-FooterCards'><p>Total:</p></div>
                                    <div className='buyFee'><p>COP 328.720,00</p></div>
                                </div>
                                <div className='itemFooter buyFee'><p>Comprar</p></div>
                              </div>
                          </div>
                        )
                      }}


export default  UpsellSelectedFamiliesRoundTrip