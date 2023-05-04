import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

import './Assets/styles.css'

const PaymentGateway = (props) => {



console.log({props})

  

  const [TimeLoad, setTimeLoad]= useState(false)

  const navigate = useNavigate()

const dataCabin = props.dataCabin ?? []
const dataComponents = props.dataComponents
console.log({dataCabin})
console.log({dataComponents})


const [dataFamiliesGoing, setDataFamiliesGoing]= useState()
const [dataFamiliesReturn, setDataFamiliesReturn]= useState()

console.log({dataFamiliesGoing})

useEffect(()=> {

  const handleJsonFamilies =  ()=>{

    if(dataComponents.length === 1){

      const familiesGoing = new Object();
      familiesGoing.family = dataComponents[0].fareFamilyDetails.fareFamilyname
      setDataFamiliesGoing(familiesGoing)
      

    }

    if(dataComponents.length === 2){

      const familiesGoing = new Object();
      familiesGoing.family = dataComponents[0].fareFamilyDetails.fareFamilyname
      setDataFamiliesGoing(familiesGoing)
      const familiesReturn = new Object();
      familiesReturn.family = dataComponents[1].fareFamilyDetails.fareFamilyname 
      setDataFamiliesReturn(familiesReturn)

    }


  }

  handleJsonFamilies()
  
                },[]);




const FlightGoing = props.FlightGoing ?? []
const FlightReturn = props.FlightReturn ?? []

const passengerAdultData = props.passengerAdultData ?? []
console.log({passengerAdultData})
const passengerInfantData = props.passengerInfantData ?? []
const passengerChildData = props.passengerChildData ?? []

const passengerContactData = props.passengerContactData ?? []

const recommendationInformationGoing = props.recommendationInformationGoing ?? []
/* const recommendationInformationReturn = props.recommendationInformationReturn ?? [] */

const goingCompanyRecommendation = Array.isArray(recommendationInformationGoing.paxFareProduct[0].paxFareDetail.codeShareDetails) === true ? recommendationInformationGoing.paxFareProduct[0].paxFareDetail.codeShareDetails[0].company : recommendationInformationGoing.paxFareProduct[0].paxFareDetail.codeShareDetails.company;

const goingBookingClass = recommendationInformationGoing.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.cabinProduct.length > 1 ? recommendationInformationGoing.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.cabinProduct[0].rbd : recommendationInformationGoing.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.cabinProduct.rbd
/* const returnBookingClass = recommendationInformationReturn.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.cabinProduct.rbd ?? [] */

const goingfareType = Array.isArray( recommendationInformationGoing.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.fareProductDetail.fareType  ) === true ? recommendationInformationGoing.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.fareProductDetail.fareType[0] : recommendationInformationGoing.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.fareProductDetail.fareType
console.log(goingfareType)
const [dataSavePNR, setDataSavePNR ] = useState()
console.log({dataSavePNR})

/* const rbd = dataCabin.length > 0 ? `${dataCabin[i].cabinProduct.rbd}` : `${goingBookingClass}` */


  console.log({FlightGoing})
/* 
*---------DINAMIC PASSENGERS-------- 
*/
const travellersPNR = [];

const dynamicForms = () =>{
    for(let i = 0; i < passengerAdultData.length; i ++ ){
      
        if(passengerInfantData.length === 0){
            travellersPNR.push({
              "number":i + 1,
              "free":`${passengerAdultData[i].userData.dateFree}${passengerAdultData[i].userData.gender}--`, 
              "name":`${passengerAdultData[i].userData.NameAdult}`,
              "lastName":`${passengerAdultData[i].userData.LastNameAdult}`,
              "adult":`${passengerAdultData[i].userData.adultsAll}`
      })}else{
            travellersPNR.push({
              "number":i + 1,
              "free":`${passengerAdultData[i].userData.dateFree}${passengerAdultData[i].userData.gender}--`, 
              "name":`${passengerAdultData[i].userData.NameAdult}`,
              "lastName":`${passengerAdultData[i].userData.LastNameAdult}`,
              "adult":`${passengerAdultData[i].userData.adultsAll}`,
              "baby":{
                "name":`${passengerInfantData[i].userData.NameBaby}`,
                "lastName":`${passengerInfantData[i].userData.LastNameBaby}`,
                "free":`${passengerInfantData[i].userData.dateFree}${passengerInfantData[i].userData.gender}I--`,
                "birth":`${passengerInfantData[i].userData.DateBrith}`,
                "offspring":true
      }})}}
    for(let i = 0; i < passengerChildData.length; i ++ ){
        travellersPNR.push({
          "number":passengerAdultData.length + 1,
          "free":`${passengerChildData[i].userData.dateFree}${passengerChildData[i].userData.gender}--`, 
          "name":`${passengerChildData[i].userData.NameBoy}`,
          "lastName":`${passengerChildData[i].userData.LastNameBoy}`,
          "child":`${passengerChildData[i].userData.childsAll}`,
          "birth":`${passengerChildData[i].userData.DateBrith}`
    })}}
  dynamicForms()   

/* 
*---------END-------- 
*/
/* 
*---------ITINERARY GOING AND RETURN-------- 
*/

/*    
*
*--------------------------------------- -------------------------ITINERARY RETURN!!
*
*/

const itineraryReturnConditionalDirect  = FlightReturn.length === 1 ?
{
  "group": FlightGoing.length + 1 ,
  "from": `${FlightReturn[0].location[0].locationId}`,
  "to": `${FlightReturn[0].location[1].locationId}`,
  ...dataFamiliesReturn,
  "bookingClass":dataCabin.length > 0 && FlightReturn.length === 1
  ? dataCabin[dataCabin.length -1].cabinProduct.rbd
  : goingBookingClass,

  "dateDeparture": `${FlightReturn[0].productDateTime.dateOfDeparture}T00:00:00+0000`,
  
  "company":`${FlightReturn[0].companyId.marketingCarrier}`,
  "flightNumber":`${FlightReturn[0].flightOrtrainNumber}`,
  }
:undefined;
const itineraryReturnConditionalScales = FlightReturn.length >= 2?
    (FlightReturn.length === 2?
      {
        "group": FlightGoing.length + 1 ,
        "from": `${FlightReturn[0].location[0].locationId}`,
        "to": `${FlightReturn[0].location[1].locationId}`,
        ...dataFamiliesReturn,
        "bookingClass":dataCabin.length > 0 && FlightReturn.length === 2
        ? dataCabin[dataCabin.length -2].cabinProduct.rbd
        : goingBookingClass,

        "dateDeparture": `${FlightReturn[0].productDateTime.dateOfDeparture}T00:00:00+0000`,
        "company":`${FlightReturn[0].companyId.marketingCarrier}`,
        "flightNumber":`${FlightReturn[0].flightOrtrainNumber}`,
        "scale":[
          {
            "group": FlightGoing.length + 2 ,
            "from": `${FlightReturn[1].location[0].locationId}`,
            "to": `${FlightReturn[1].location[1].locationId}`,
            ...dataFamiliesReturn,
            "bookingClass":dataCabin.length > 0 && FlightReturn.length === 2
            ? dataCabin[dataCabin.length -1].cabinProduct.rbd
            : goingBookingClass,

            "dateDeparture": `${FlightReturn[1].productDateTime.dateOfDeparture}T00:00:00+0000`,
            "company":`${FlightReturn[1].companyId.marketingCarrier}`,
            "flightNumber":`${FlightReturn[1].flightOrtrainNumber}`,
            }
          ]
        }
    :
      {
        "group": FlightGoing.length + 1 ,
        "from": `${FlightReturn[0].location[0].locationId}`,
        "to": `${FlightReturn[0].location[1].locationId}`,
        ...dataFamiliesReturn,
        "bookingClass":dataCabin.length > 0 && FlightReturn.length === 3
        ? dataCabin[dataCabin.length -3].cabinProduct.rbd
        : goingBookingClass,

        "dateDeparture": `${FlightReturn[0].productDateTime.dateOfDeparture}T00:00:00+0000`,
        "company":`${FlightReturn[0].companyId.marketingCarrier}`,
        "flightNumber":`${FlightReturn[0].flightOrtrainNumber}`,
        "scale":[
          {
            "group": FlightGoing.length + 2 ,
            "from": `${FlightReturn[1].location[0].locationId}`,
            "to": `${FlightReturn[1].location[1].locationId}`,
            ...dataFamiliesReturn,
            "bookingClass":dataCabin.length > 0 && FlightReturn.length === 3
            ? dataCabin[dataCabin.length -2].cabinProduct.rbd
            : goingBookingClass,

            "dateDeparture": `${FlightReturn[1].productDateTime.dateOfDeparture}T00:00:00+0000`,
            "company":`${FlightReturn[1].companyId.marketingCarrier}`,
            "flightNumber":`${FlightReturn[1].flightOrtrainNumber}`,
            },
            {
              "group": FlightGoing.length + 3 ,
              "from": `${FlightReturn[2].location[0].locationId}`,
              "to": `${FlightReturn[2].location[1].locationId}`,
              ...dataFamiliesReturn,
              "bookingClass":dataCabin.length > 0 && FlightReturn.length === 3
            ? dataCabin[dataCabin.length -1].cabinProduct.rbd
            : goingBookingClass,

              "dateDeparture": `${FlightReturn[2].productDateTime.dateOfDeparture}T00:00:00+0000`,
              "company":`${FlightReturn[2].companyId.marketingCarrier}`,
              "flightNumber":`${FlightReturn[2].flightOrtrainNumber}`,
              }
          ]
        }
      
      )
: itineraryReturnConditionalDirect ;

/*
*
*--------------------------------------- ------------------------- END 
*
*/

const itineraryGoingReturnConditional  = FlightGoing.length >= 2 ? 
(FlightGoing.length === 2 ? 
      [
        {
        "group": FlightGoing.indexOf(FlightGoing[0]) + 1 ,
        "from": `${FlightGoing[0].location[0].locationId}`,
        "to": `${FlightGoing[0].location[1].locationId}`,
        ...dataFamiliesGoing,
        "bookingClass":dataCabin.length > 0 && FlightGoing.length === 2
                        ? dataCabin[0].cabinProduct.rbd 
                        : goingBookingClass,
        "dateDeparture": `${FlightGoing[0].productDateTime.dateOfDeparture}T00:00:00+0000`,
        "company":`${FlightGoing[0].companyId.marketingCarrier}`,
        "flightNumber":`${FlightGoing[0].flightOrtrainNumber}`,
        "scale":[
          {
            "group": FlightGoing.indexOf(FlightGoing[1]) + 1 ,
            "from": `${FlightGoing[1].location[0].locationId}`,
            "to": `${FlightGoing[1].location[1].locationId}`,
            ...dataFamiliesGoing,
            "bookingClass":dataCabin.length > 0 && FlightGoing.length === 2
                              ? dataCabin[1].cabinProduct.rbd
                              : goingBookingClass,
            "dateDeparture": `${FlightGoing[1].productDateTime.dateOfDeparture}T00:00:00+0000`,
            "company":`${FlightGoing[1].companyId.marketingCarrier}`,
            "flightNumber":`${FlightGoing[1].flightOrtrainNumber}`,
            }
          ]
        },
        itineraryReturnConditionalScales
      ]
    :
      [
        {
        "group": FlightGoing.indexOf(FlightGoing[0]) + 1 ,
        "from": `${FlightGoing[0].location[0].locationId}`,
        "to": `${FlightGoing[0].location[1].locationId}`,
        ...dataFamiliesGoing,
        "bookingClass":dataCabin.length > 0 && FlightGoing.length === 3
                          ? dataCabin[0].cabinProduct.rbd
                          : goingBookingClass,
        "dateDeparture": `${FlightGoing[0].productDateTime.dateOfDeparture}T00:00:00+0000`,
        "company":`${FlightGoing[0].companyId.marketingCarrier}`,

        "flightNumber":`${FlightGoing[0].flightOrtrainNumber}`,
        "scale":[
          {
            "group": FlightGoing.indexOf(FlightGoing[1]) + 1 ,
            "from": `${FlightGoing[1].location[0].locationId}`,
            "to": `${FlightGoing[1].location[1].locationId}`,
            ...dataFamiliesGoing,
            "bookingClass":dataCabin.length > 0 && FlightGoing.length === 3
                              ? dataCabin[1].cabinProduct.rbd
                              : goingBookingClass,
            "dateDeparture": `${FlightGoing[1].productDateTime.dateOfDeparture}T00:00:00+0000`,
            "company":`${FlightGoing[1].companyId.marketingCarrier}`,

            "flightNumber":`${FlightGoing[1].flightOrtrainNumber}`,
            },
            {
              "group": FlightGoing.indexOf(FlightGoing[2]) + 1 ,
              "from": `${FlightGoing[2].location[0].locationId}`,
              "to": `${FlightGoing[2].location[1].locationId}`,
              ...dataFamiliesGoing,
              "bookingClass": dataCabin.length > 0 && FlightGoing.length === 3
                                ? dataCabin[2].cabinProduct.rbd
                                : goingBookingClass,
              "dateDeparture": `${FlightGoing[2].productDateTime.dateOfDeparture}T00:00:00+0000`,
              "company":`${FlightGoing[2].companyId.marketingCarrier}`,
              "flightNumber":`${FlightGoing[2].flightOrtrainNumber}`,
              }
          ]
        },
        itineraryReturnConditionalScales
      ]
  )
: 
[
  {
  "group": FlightGoing.indexOf(FlightGoing[0]) + 1 ,
  "from": `${FlightGoing[0].location[0].locationId}`,
  "to": `${FlightGoing[0].location[1].locationId}`,
  ...dataFamiliesGoing,
  "bookingClass": dataCabin.length > 0 && FlightGoing.length === 1
                    ? dataCabin[0].cabinProduct.rbd
                    : goingBookingClass, 
                    
  "dateDeparture": `${FlightGoing[0].productDateTime.dateOfDeparture}T00:00:00+0000`,
  "company":`${FlightGoing[0].companyId.marketingCarrier}`,
  "flightNumber":`${FlightGoing[0].flightOrtrainNumber}`,
  },
  itineraryReturnConditionalScales
];
/* 
*---------END-------- 
*/





useEffect(()=> {

  const handleSavePNR = async ()=>{
    const parseEmail = passengerContactData[0].userData.Email.replace('@', '//')
  
    let itinerary = []
    itineraryGoingReturnConditional.map((item)=>{
      if(item){
        itinerary.push(item)
      }
    })
   
    console.log({itinerary})

    const urlPNR = 'https://travelflight.pdtcomunicaciones.com/api/savepnr';
    const resultPNR = await axios.post(urlPNR,{
      "company":`${goingCompanyRecommendation}`,
      "bag": false,
      "fare":`${goingfareType}`,
      "tel":`${passengerContactData[0].userData.CodePhoneNumber}${passengerContactData[0].userData.NumberPhone}`,
      "email":`${parseEmail}`,
      'emailTwo':`${passengerContactData[0].userData.Email}`
      ,
      "travellers":travellersPNR,
      itinerary
   });
      setDataSavePNR(resultPNR.data)
      setTimeLoad(true)
      console.log(resultPNR.data)
    
  }
  handleSavePNR()
  
                },[]);
      const handleNavigate =()=>{
        navigate(`/paymentgateway`,{state: {dataSavePNR}})
  
      }
  return(
    <div className='containedButtonPaymentGateway'>
{TimeLoad === true?

<div className='ButtonPaymentGateway'
      onClick={handleNavigate}>
      <div className='itemPaymentGateway'>
      <svg xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45" 
        viewBox="0 0 24 24" 
        fill="none"
        >
            <path 
                d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z" 
                stroke="#FFFFFF" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round">
            </path>
              <path d="m7.75 12 2.83 2.83 5.67-5.66" 
                stroke="#FFFFFF" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round">
              </path>
          </svg>
      </div>
          <div className='itemPaymentGateway'
         
          style={{
            cursor:'pointer',
            color:'white', 
            fontFamily: 'Inter', 
            fontWeight: 600, 
            fontSize: '18px', 
            textTransform: 'capitalize' 
          }}>
           <p>pasarela de pago</p>
          </div>
      </div>

:

<div className='ButtonPaymentGatewayFalse'>
      <div className='itemPaymentGateway'>
      <CircularProgress color="inherit" />
      </div>
          <div className='itemPaymentGatewayFalse'
         
          style={{
            cursor:'pointer',
            color:'white', 
            fontFamily: 'Inter', 
            fontWeight: 600, 
            fontSize: '18px', 
            textTransform: 'capitalize' 
          }}>
           <p>pasarela de pago</p>
          </div>
      </div>

}


    </div>
  )
}



 


export default PaymentGateway




