import React, {useState} from 'react'
import { useEffect } from 'react';
import {  Record, RecordCircle } from 'iconsax-react'
import Checkbox from './Assets/Img/Checkbox.png'
import CheckboxSelected from './Assets/Img/CheckboxSelected.png'

import './Assets/styles.css'

const CheckboxIcon = (props) => {

const [active,setActive ] = useState(false)

const keys = props.keys
const flight = props.flight
const setFlightSelectedGoing = props.setFlightSelectedGoing
const setRecommendationInformationGoing = props.setRecommendationInformationGoing
const recommendation = props.recommendation

useEffect(()=> {
        const selected = async ()=>{
            if( props.keyActive === keys) { 
                await setActive(true)
                await setFlightSelectedGoing(flight)
                await setRecommendationInformationGoing(recommendation)
            }else{
                setActive(false)
                setFlightSelectedGoing(undefined)
                setRecommendationInformationGoing(undefined)
            }}
        selected()
},[props.keyActive]);

const handleSelectedFlight = ()=>{
    props.setkeyActive(keys)
    setActive(true)
    setFlightSelectedGoing(flight)
    setRecommendationInformationGoing(recommendation)
}
    return (
      <div className='CheckboxIcon'>
            {active === false ?



<div
    key={keys}
    onClick={handleSelectedFlight}
    style={{ cursor: 'pointer' }} 
    className='checkbox_img'>
    <img src={Checkbox} 
    alt="Checbox Flight" 
    />

</div>
            
            
               
            :      
            
            <div
            key={keys}
            onClick={()=>{setActive(false)}}
            style={{ cursor: 'pointer' }} 
            className='checkbox_img'>
            <img src={CheckboxSelected} 
            alt="Checbox Flight" 
            />
        
        </div> }
      </div>
    )
}

export default CheckboxIcon



