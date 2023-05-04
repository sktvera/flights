import React, { useState, useEffect } from "react";
import FlightDetail from '../FlightDetail/FlightDetail'
import FlightDetailFilter from '../FlightDetailFilter/FlightDetailFilter'
import './Assets/styles.css'
import { useLocation} from 'react-router';
import Axios from "axios";

const FlightSelectedDetail = () => {
  const location = useLocation();
    // console.log(location.state.citiesDataState)
    const buttonDestinityFlight = location.state.buttonDestinityFlight
    const buttonOriginFlight = location.state.buttonOriginFlight
    //clasSelectedAll
    const clasSelected = location.state.clasSelected
    //economic
    const economic = location.state.clasSelected.economic
    //ejecutive
    const ejecutive = location.state.clasSelected.ejecutive
    //business
    const business = location.state.clasSelected.business
    //original selected date
    const dateGoingSelected = location.state.dateGoingSelected
    const dateSreturnSelected = location.state.dateSreturnSelected
    //date Selected original captured
    const dateOrigin = new Date(dateGoingSelected);
    const dateReturn = new Date(dateSreturnSelected);
    //original selected date parse
    const dateOriginParse = dateOrigin.toISOString();
    const dateReturnParse = dateReturn.toISOString();
    //console.log(dateOriginParse)
    //console.log(dateReturnParse)
    //code iata
    const codeIataDestiny= buttonDestinityFlight.substr(-3)
    const codeIataOrigin= buttonOriginFlight.substr(-3)
    //console.log(codeIata)

    //ADULT
    const passengersSelectedsAdult = Number(location.state.passengersSelecteds.adult)
    //BOY
    const passengersSelectedsBoy = Number(location.state.passengersSelecteds.boy)
    //BABY
    const passengersSelectedsBaby = Number(location.state.passengersSelecteds.baby)
    //pasangerd all
    //passengersAll
    const passengersSelecteds = Number(passengersSelectedsAdult + passengersSelectedsBoy)
    /* console.log({passengersSelecteds})
    console.log({passengersSelectedsAdult})
    console.log({passengersSelectedsBoy})
    console.log({codeIataOrigin})
    ConstantSourceNode.log({codeIataDestiny})
    console.log({dateOriginParse}) */

    const passengersAll = Number(location.state.passengersSelecteds.adult + location.state.passengersSelecteds.boy + location.state.passengersSelecteds.baby)


    const [flights, setFlights] = useState([])

useEffect(()=> {

  const getFlights = async ()=>{
      const url = "https://travelflight.pdtcomunicaciones.com/api/flights";
  const result = await Axios.post(url, {
    "searchs": 2,
    "qtyPassengers": `${passengersSelecteds}`,
    "adult":`${passengersSelectedsAdult}`,
    "child":`${passengersSelectedsBoy}`,
    "intinerary":
    [
        {
            "departureCity": `${codeIataOrigin}`,
            "arrivalCity": `${codeIataDestiny}`,

            "hour": `${dateOriginParse}`
        },
            
        {
            "departureCity": `${codeIataOrigin}`,
            "arrivalCity": `${codeIataDestiny}`,
            "hour": `${dateReturnParse}`
        }

    ]
}
  )

  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
      setFlights(result)
      console.log(setFlights)
  }
  getFlights()
},[]);
     
  return (
    <div className='flightSelectedDetail'>
        <FlightDetailFilter />
        <FlightDetail />
    </div>
  )
}

export default FlightSelectedDetail



/* FlightSelectedDetail */