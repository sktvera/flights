import React from 'react'
import { useState, useEffect } from 'react';

import axios from 'axios'

const NameAirlineApi = ({flight})=>{

    const airlineCode = flight.segments[0].companyId.marketingCarrier
    const [nameAirline, setNameAirline] = useState([])

    useEffect(()=> {
        const apiNameAirline = async ()=>{
        const url = 'https://travelflight.pdtcomunicaciones.com/api/airline';
        const result = await axios.post(url,{
                "code":`${airlineCode}`
            })
            setNameAirline(result.data)
                      }
                      apiNameAirline()
                      },[]);

if(nameAirline.length === 0){
    return (
        <div>           
            <p  className='itemFontSegment nameAirline dateInfoFlight'>...</p>
        </div>
    )
}else{ 
    return (
        <div>
           <p  className='itemFontSegment nameAirline dateInfoFlight'>{nameAirline[0].name}</p>
        </div>
      )
}
}
export default NameAirlineApi

