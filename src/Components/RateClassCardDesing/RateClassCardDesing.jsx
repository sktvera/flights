import React, { useState } from 'react'
import { Button } from '@material-ui/core'

import './Assets/styles.css'

const RateClassCardDesing = (props) => {


const families = props.families ?? []




const setSelectionRateClassGoing = props.setSelectionRateClassGoing ??[]
const setSelectionRateClassReturn = props.setSelectionRateClassReturn ??[]
const handleShowRateClass = props.handleShowRateClass
const handleShowRateClassDestiny= props.handleShowRateClassDestiny


const handleShow = ()=>{
    setSelectionRateClassGoing(families.components[0].fareFamilyDetails.fareFamilyname);
    handleShowRateClass();
    setSelectionRateClassReturn(families.components[1].fareFamilyDetails.fareFamilyname);
     handleShowRateClassDestiny();
     
}

const handleShowDestiny = ()=>{
    setSelectionRateClassReturn(families.components[1].fareFamilyDetails.fareFamilyname);
     handleShowRateClassDestiny();
}


    return  /* && array.indexOf(families) ===  keys  */ (
      <div>
        <div className='RateClassCardDesing'>
          <div className='RateClassCardDesing-tittle'>
            {props.returnn ? 
            <h3 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', textTransform: 'capitalize' }}>
            {families.components[1].fareFamilyDetails.fareFamilyname} 
         </h3>
        :
        <h3 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', textTransform: 'capitalize' }}>
        {families.components[0].fareFamilyDetails.fareFamilyname} 
     </h3>
        }
               
          </div>
          <div className='containedItemsRateClassCard'>
                <div className='ItemsRateClassCard'>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', textTransform: 'capitalize' }}>
                    {families.warning[0].warningText.errorFreeText} 
                    </p>
                </div>
                <div className='ItemsRateClassCard'>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', textTransform: 'capitalize' }}>
                    {families.warning[1].warningText.errorFreeText} 
                    </p>
                </div>
                <div className='ItemsRateClassCard'>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', textTransform: 'capitalize' }}>
                    {families.warning[2].warningText.errorFreeText} 
                    </p>
                </div>
                <div className='ItemsRateClassCard'>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', textTransform: 'capitalize' }}>
                    {families.warning[3].warningText.errorFreeText} 
                    </p>
                </div>
                <div className='ItemsRateClassCard'>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', textTransform: 'capitalize' }}>
                    {families.warning[4].warningText.errorFreeText} 
                    </p>
                </div>
                <div className='ItemsRateClassCard'>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', textTransform: 'capitalize' }}>
                    {families.warning[5].warningText.errorFreeText} 
                    </p>
                </div>
                <div className='ItemsRateClassCard'>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', textTransform: 'capitalize' }}>
                    {families.warning[6].warningText.errorFreeText} 
                    </p>
                </div>
                <div className='ItemsRateClassCard'>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', textTransform: 'capitalize' }}>
                    {families.warning[7].warningText.errorFreeText} 
                    </p>
                </div>
                <div className='ItemsRateClassCard'>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', textTransform: 'capitalize' }}>
                    {families.warning[8].warningText.errorFreeText} 
                    </p>
                </div>
                <div onClick={handleShowDestiny} className='ItemsRateClassCard buttonsRateClassCardContained'>
                <Button onClick={handleShow} className='buttonsRateClassCard' variant="contained">Seleccionar: {families.components[0].fareFamilyDetails.fareFamilyname}</Button>
                </div>
          </div>
        </div>
        
      </div>
    )
   
}

export default RateClassCardDesing


