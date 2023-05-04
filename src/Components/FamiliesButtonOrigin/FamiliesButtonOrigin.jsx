import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Selectedluggage from './Assets/Img/Selectedluggage.png'
import './Assets/styles.css'

const FamiliesButtonOrigin = ({adult,child,baby,itineraryGoingReturnConditional }) => {

    const[selectedRate, setSelectedRate] = useState('Seleccionar')
    const[familiesOpenButton, setFamiliesOpenButton] = useState(false)

const [dataUpsell, setDataUpsell] = useState()

useEffect(()=> {
    const apiUpsell = async ()=>{
    const url = 'https://travelflight.pdtcomunicaciones.com/api/upsell';
    const result = await axios.post(url,{
        "adult": adult,
        "child":child,
        "baby":baby,
       /*  "fare":`${fareType}`, */
       "fare":`RP`,
        "bag":false,
        "segments":itineraryGoingReturnConditional
    })
    setDataUpsell(result.data.families)
    /* console.log(result.data) */
                  }
                  apiUpsell()
                  },[dataUpsell]);







                  useEffect(()=> {
                    const handleOneWayTariffs = async ()=>{

                        var oneWayTariffs =[]

                        for(let i = 0; i < dataUpsell.length; i ++ ){
                            const element = dataUpsell[i]
                            oneWayTariffs.push(element[0].components[0].fareFamilyDetails.fareFamilyname)
                            }  

                            const uniqueOneWayTariffs = (oneWayTariffs) => {
                                return oneWayTariffs.filter((elem, index, self) => {
                                 return index === self.indexOf(elem);
                                });
                              }
                              
                            var itemUniqueOneWayTariffs = await uniqueOneWayTariffs(oneWayTariffs);
                            console.log(itemUniqueOneWayTariffs);
                
                                  }
                                  handleOneWayTariffs()
                                  });

                 

                  

           

        

const handleFamiliesOpenButton = () =>{
   if(familiesOpenButton === false){
    setFamiliesOpenButton(true)
   }else{
    setFamiliesOpenButton(false)
   }
}
/* console.log(dataUpsell) */
  return (
<div className='cotainedFamilies-selected'>
    <div onClick={handleFamiliesOpenButton} style={{paddingRight:'20px',justifyContent:'flex-end' }} className='tittleBody planType'> 
        <p className='texFamilies-Strong'>{selectedRate}</p>
        <div className='selectPlan-addLuggage_img'>
            {familiesOpenButton === false ?
            <img src={Selectedluggage} alt="agregar equipaje" />
            :
            <img src={Selectedluggage} className='SelectedluggageRotate' alt="agregar equipaje" />
            }
        </div>                              
    </div>
    {familiesOpenButton === true ? 
    <div className='bodyScrollFamilies'>
        {dataUpsell.map((families,keys)=>{
        const feeFamilies = families[0].components[0].fareFamilyDetails.fareFamilyname
        /* console.log(families[0].components) */
            return(
                <div onClick={()=>[setSelectedRate(feeFamilies),setFamiliesOpenButton(false) ]} className='bodyScrollFamilies-item' >
                    <p className=''>ida: {families[0].components[0].fareFamilyDetails.fareFamilyname} - vuelta {families[0].components[1].fareFamilyDetails.fareFamilyname} </p>
                </div>
            )})}
    </div>
    :null}
</div>
)
}

export default FamiliesButtonOrigin