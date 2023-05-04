import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation} from 'react-router';
import { useEffect } from 'react';
import VivaLogo from '../FlightDetailFilter/Assets/Img/VivaLogo.png'
import LatamLogo from '../FlightDetailFilter/Assets/Img/LatamLogo.png'
import AviancaLogo from '../FlightDetailFilter/Assets/Img/AviancaLogo.png'
import wellezy from './Assets/Img/wellezy.png'
import Alert from './Assets/Img/Alert.png'
import LogoBlue from './Assets/Img/LogoBlue.png'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FlightData from '../FlightData/FlightData'
import axios from 'axios'

import './Assets/styles.css'

const airlines = [
  {
    id: 1,
    img: VivaLogo,
    name: 'viva air',
    priceDirect: 1050,
    priceOneScale: 950,
    priceMoreScale: null, 
  },
  {
    id: 2,
    img: LatamLogo,
    name: 'latam airlines',
    priceDirect: 1100,
    priceOneScale: 1080,
    priceMoreScale: null, 
  },
  {
    id: 3, 
    img: AviancaLogo, 
    name: 'avianca',
    priceDirect: 1120,
    priceOneScale: 1100,
    priceMoreScale: 1050, 
  },
]
const FlightDetail = () => {

  const [value, setValue] = useState('1')
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    //setValue(newValue);
}; 
  const location = useLocation();

  
 const nameOrigin = location.state.buttonOriginFlight
 const nameDestiny = location.state.buttonDestinityFlight
 const nameOriginSlice = nameOrigin.slice(1, -5);
 const nameDestinySlice = nameDestiny.slice(1, -5);


 // const citiesDataState = location.state.citiesDataState
  const passengersSelected = location.state.passengersSelecteds

    const dateGoingSelectedApi =  location.state.dateGoingSelectedApi
    const dateSreturnSelectedApi = location.state.dateSreturnSelectedApi
    const codeIataDestiny= location.state.codeiataDestinity
    const codeIataOrigin= location.state.codeIataOrigin
    const oneWay = location.state.oneWay
    const roundTrip = location.state.roundTrip
    const passengersSelectedsAdult = Number(location.state.passengersSelecteds.adult)
    const passengersSelectedsBoy = Number(location.state.passengersSelecteds.boy)
    const passengersSelectedsBaby = Number(location.state.passengersSelecteds.baby)
    const passengersSelecteds = Number(passengersSelectedsAdult + passengersSelectedsBoy)
      
      const [flights, setFlights] = useState([])
      const [flightsSelect, setFlightsSelect] = useState([])
     

      const apiOneWay ={ 
            "searchs": 50,
            "class":false,
            "qtyPassengers": passengersSelecteds,
            "adult": passengersSelectedsAdult,
            "child":passengersSelectedsBoy,
            "baby":passengersSelectedsBaby,
            "itinerary":
                    [
                        {
                        "departureCity": `${codeIataOrigin}`,
                        "arrivalCity": `${codeIataDestiny}`,

                        "hour": `${dateGoingSelectedApi}`
                        }
                    ]
            }

            const apiRoundTrip =  {
                  "searchs": 50,
                  "class":false,
                  "qtyPassengers": passengersSelecteds,
                  "adult": passengersSelectedsAdult,
                  "child":passengersSelectedsBoy,
                  "baby":passengersSelectedsBaby,
                  "itinerary":
                        [
                            {
                                "departureCity": `${codeIataOrigin}`,
                                "arrivalCity": `${codeIataDestiny}`,
    
                                "hour": `${dateGoingSelectedApi}`
                                },
                            {
                                "departureCity": `${codeIataDestiny}`,
                                "arrivalCity": `${codeIataOrigin}`,
    
                                "hour": `${dateSreturnSelectedApi}`
                                }
                        ]
                }
 // CONNECT API
  useEffect(()=> {
   
      const getFlights = async ()=>{
      const url = "https://travelflight.pdtcomunicaciones.com/api/flights";
      const apiLoad = await roundTrip === false && oneWay=== true ? apiOneWay : apiRoundTrip
      const result = await axios.post(url,apiLoad
                                    )
  /*   .then(function (response) {
                                console.log(response);
                              })
    .catch(function (error) {
                              console.log(error);
                            });  */
        setFlights(result.data.data)
        setFlightsSelect(result.data.data)
      /*   console.log(result.data) */
                    }
        getFlights()
                    },[]);
                        
/* LOADER WELLEZY*/ if(flightsSelect.length === 0){
                          return (
                                  <div className='loader'>           
                                      <div class="container">
                                          <div class="load">
                                              <img
                                              className='img' 
                                              src={wellezy} 
                                              alt="agregar equipaje" />
                                              <div className='containerBalls'>
                                              <div class="balls"></div>
                                              <div class="balls"></div>
                                              <div class="balls"></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  )
                          }else{ 
                          return (
                              <div className='flightDetail'>
                                    <div style={{ widows: '100%', height: '290px', borderRadius: '20px', boxShadow: '-4px 4px 4px rgba(0, 0, 0, 0.25)', marginBottom: '20px'}}>
                                          <Box sx={{ width: '100%', marginBottom: '20px'}}>
                                                <TabContext value={value}>
                                                  <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                                                        <TabList onChange={handleChange} aria-label="lab API tabs example" value="1">
                                                              <Tab label="precio por aerolínea" value="1" sx={{ width: '50%' }}/>
                                                              <Tab label="precio +/- 3 días" value="2" sx={{ width: '50%' }}/>
                                                        </TabList>
                                                  </Box>
                                                  <TabPanel value="1" sx={{ padding: '0 !important' }}>
                                                        <div className='pricesByAirlines'>
                                                              <div className='pricesByScales'>
                                                                    <div style={{ width: '100%', height: '60px', borderBottom: '1px solid rgba(0, 0, 0, .3)' }}/>
                                                                    <div className='pricesByScales_'>
                                                                          <p>directo</p>
                                                                    </div>
                                                                    <div className='pricesByScales_'>
                                                                          <p>1 escala</p>
                                                                    </div>
                                                                    <div className='pricesByScales_' style={{ border: 'none' }}>
                                                                          <p>2 o más escalas</p>
                                                                    </div>
                                                              </div>
                                                              <div className='pricesByAirline'>
                                                                    {airlines.map((airline) => {
                                                                      return (
                                                                            <div key={airline.id} className='pricesByAirline_'>
                                                                                  <div className='pricesByAirline_title'>
                                                                                        <div className='pricesByAirline_img'>
                                                                                              <img src={airline.img} alt={airline.name} />
                                                                                        </div>
                                                                                        <p>{airline.name}</p>
                                                                                  </div>
                                                                                  <div className='priceByAirline_price'>
                                                                                        <p>$ {airline.priceDirect}</p>
                                                                                  </div>
                                                                                  <div className='priceByAirline_price'>
                                                                                        <p>$ {airline.priceOneScale}</p>
                                                                                  </div>
                                                                                  <div className='priceByAirline_price'>
                                                                                        {airline.priceMoreScale &&
                                                                                          <p>$ {airline.priceMoreScale}</p>
                                                                                        }
                                                                                  </div>
                                                                            </div>
                                                                      )
                                                                    })}
                                                              </div>
                                                        </div>
                                                  </TabPanel>
                                                  <TabPanel 
                                                  value="2">
                                                        Precios más de tres días
                                                  </TabPanel>
                                                </TabContext>
                                          </Box>
                                    </div>
                                    <div className='recommendations'>
                                          <div className='recommendation'>
                                                <div className='recommendation_'>
                                                      <p>Nuestra recomendadión</p>
                                                      <p>$ 950 - 7h 26m</p>
                                                </div>
                                          </div>
                                          <div className='recommendation' style={{ borderRight: '1px solid rgba(0, 0, 0, .3)', borderLeft: '1px solid rgba(0, 0, 0, .3)' }}>
                                                <div className='recommendation_'>
                                                      <p>Precio más bajo</p>
                                                      <p>$ 950 - 7h 26m</p>
                                                </div>
                                          </div>
                                          <div className='recommendation'>
                                                <div className='recommendation_'>
                                                      <p>Menor duración</p>
                                                      <p>$ 1120 - 6h 15m</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='alert'>
                                          <div className='alert_'>
                                                <div className='alert_img'>
                                                      <img src={Alert} alt="Alert" />
                                                </div>
                                                <div className='alert_text'>
                                                      <h2>Crea una alerta de precios</h2>
                                                      <p>Compartenos tu email y te avisamos cuando los vuelos a Medellín estén a menos de $950. <Link to='/alert'>Crear Alerta</Link></p>
                                                </div>
                                                <div className='alert_logo'>
                                                      <div className='alert_logo_'>
                                                            <img src={LogoBlue} alt="Wellezy" />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    {
                                    flights.recommendation.map((recommendation)=>{
                                    return(
                                          <FlightData
                                          oneWay={oneWay}
                                          roundTrip={roundTrip}
                                          Seg1={flights.Seg1}
                                          Seg2={flights.Seg2}
                                          recommendation={recommendation}
                                          passengersSelected={passengersSelected}
                                          nameOriginSlice={nameOriginSlice}
                                          nameDestinySlice={nameDestinySlice}
                                          />
                                    )
                                    })}   
                              </div>
                                  )}}

export default FlightDetail








