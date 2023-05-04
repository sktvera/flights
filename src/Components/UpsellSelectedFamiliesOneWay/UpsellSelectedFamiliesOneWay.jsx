
import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import classnames from 'classnames';
import axios from 'axios'

import './Assets/styles.css'
import ItemReady from './/Assets/Img/ItemReady.png'

const UpsellSelectedFamiliesOneWay = ({recommendation, passengersSelected, FlightSelectedGoing, setDataCabin, setDataComponents, setOpenLuggageFamilies, setTittleFamilies}) => {

    const FlightGoing = FlightSelectedGoing.segments

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


/* 
*---------END-------- 
*/

    /* const goingCompanyRecommendation = Array.isArray(recommendation.paxFareProduct[0].paxFareDetail.codeShareDetails) === true ? recommendation.paxFareProduct[0].paxFareDetail.codeShareDetails[0].company : recommendation.paxFareProduct[0].paxFareDetail.codeShareDetails.company; */
    const fareType = recommendation.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.fareProductDetail.fareType

const [dataUpsell, setDataUpsell] = useState()

const [activeGoingBag, setActiveGoingBag] = useState(false)


    useEffect(()=> {
        const apiUpsell = async ()=>{
        const url = 'https://travelflight.pdtcomunicaciones.com/api/upsell';
        const result = await axios.post(url,{
            "adult": passengersSelected.adult,
            "child":passengersSelected.boy,
            "baby":passengersSelected.baby,
            /* "fare":`${fareType}`, */
            "fare":`RP`,
            "bag":false,
            "segments":itineraryGoingReturnConditional
        })
        setDataUpsell(result.data)
      /*   console.log(result.data) */
                      }
                      apiUpsell()
                      },[dataUpsell]);

                      const handleActiveGoing =()=>{
                        setActiveGoingBag(true)
                      }

                      const responsive = {
                        desktop: {
                          breakpoint: { max: 3000, min: 1024 },
                          items: 3,
                        },
                        tablet: {
                          breakpoint: { max: 1024, min: 464 },
                          items: 2,
                        },
                        mobile: {
                          breakpoint: { max: 464, min: 0 },
                          items: 1,
                        },
                      };
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
                          <div className='selectedCardsSegments'>
                        <Carousel responsive={responsive}>
                      {dataUpsell.families.map((families,keys)=>{
                   
                        return(
                              <div className='cardFamilies'>
                                  <div className='buttons-tittleBody'>
                                      <div className='tittleBody-OneyWay'> 
                                      <p className='texFamilies-Strong'>Tarifa {keys + 1}</p>
                                      </div>
                                      <div className='buttonsSelected-InformationFamilies-oneWay'>
                                          <div 
                                          onClick={handleActiveGoing}
                                          className={
                                            classnames(
                                            {' tittleBody items-tittleBody items-tittleBody-Selected': activeGoingBag === true ? true : false},
                                            {'tittleBody items-tittleBody ': activeGoingBag === false ? true : false})}> 
                                              <p className='texFamilies-Strong'>ida: {families[0].components[0].fareFamilyDetails.fareFamilyname}</p>
                                          </div>
                                         
                                      </div>
                                  </div>
                                  <div className='tittle-cardFamilies'>
                                      <div className='contained-warningFamilies'>
                                       
                                        <div className='warningFamilies'>
                                            <div className='ItemReady_img'>
                                                <img src={ItemReady} alt="ItemReady" />
                                            </div>
                                            <div>
                                                <p className='warning-Item'>maletas ida: {families[0].bag[0].bagAllowanceDetails.baggageQuantity}</p>
                                            </div>
                                        </div>
                                      
                                        {
                                          <div className='warningFamilies'>
                                              <div className='ItemReady_img'>
                                                  <img src={ItemReady} alt="ItemReady" />
                                              </div>
                                              <div>
                                                  <p className='warning-Item'>
                                                    {families[0].warning[0].warningText.errorFreeText}</p>
                                              </div>
                                          </div>
                                         
                                        }
                                      </div>
                                      <div>
                                          <div className='containedMenuCardFamilies'>
                                              <div className='detailSelectedSegments'>
                                                  <p>Más detalles</p>
                                              </div>
                                              <div className='tittleBody'>
                                                  <p className='texFamilies-Strong'>{families[0].fare.fareDataSupInformation[1].fareCurrency} - {families[0].fare.fareDataSupInformation[1].fareAmount}</p>
                                              </div>
                                              <div className='textSaveFamilies'>
                                                  <p  
                                                  className='texFamilies-Strong-two'
                                                  key={keys}
                                                  onClick={()=>[setDataCabin(families[0].cabin), setDataComponents(families[0].components), setOpenLuggageFamilies(false), setTittleFamilies(`Tarifa Seleccionada: ${families[0].fare.fareDataSupInformation[1].fareCurrency} - ${families[0].fare.fareDataSupInformation[1].fareAmount}`)]}>Elegir</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                        )})}   
                      </Carousel>
                        </div>
                        )
                      }
                      

}


export default  UpsellSelectedFamiliesOneWay                             