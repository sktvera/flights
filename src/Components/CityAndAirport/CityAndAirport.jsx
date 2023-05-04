import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CityAndAirport = ({iataCode, cityAndAirportClass}) => {


    const [Airport, setAirport] = useState([])



    useEffect(()=> {

        const obtenerResultado = async ()=>{
          const url = 'https://travelflight.pdtcomunicaciones.com/api/airports';
            const result = await axios.post(url, {"code" : iataCode});
           
            setAirport(result.data)
            

            console.log({result})
           
        }
       obtenerResultado()
    },[]);

    const dataAirport = Airport.find((value)=>value.iata == iataCode)
     console.log({dataAirport})


/*      Airport.length === 0 */
      

     return (
            <div>
            {
            Airport.length === 0 ? 
                <div>
                    <p className={cityAndAirportClass}>-</p>
                    <p className={cityAndAirportClass}>-</p>
                </div>
            :
                <div>
                    <p className={cityAndAirportClass}>{dataAirport.city}</p>
                    <p className={cityAndAirportClass}>{dataAirport.name}</p>
                </div>
            }

            </div>
     )
            

           
    
     
  
}



export default CityAndAirport

