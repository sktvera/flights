import { Airplane, Calendar, Component, Record, RecordCircle, SearchNormal1, User } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import HeaderImg from './Assets/Img/HeaderImg.jpeg'
import './Assets/styles.css'

import { useRef } from 'react'
import FlightsDesinitySearcher from '../FlightsDesinitySearcher/FlightsDesinitySearcher'
import FlightsPassengerDetails from '../FlightsPassengerDetails/FlightsPassengerDetails'
import FlightsDateGoing from '../FlightsDateGoing/FlightsDateGoing'
import { useNavigate, Outlet , useSearchParams } from 'react-router-dom'
import axios from 'axios'

const FlightsHeader = () => {
    const [origins, setOrigins] = useState([])
    const [search,setSearch] = useState()

    useEffect(()=> {

        
  
        const obtenerResultado = async ()=>{
          const url = 'https://travelflight.pdtcomunicaciones.com/api/airports';
            const result = await axios.post(url, {
                "code" : `${search}`
            }
          );
            setOrigins(result.data)
            console.log(result.data)
        }
       obtenerResultado()
    },[search]);
    


    const cardRef = useRef()
   
    const navigate = useNavigate()
   


    const [origin, setOrigin] = useState(false)
    const [destinity, setDestinity] = useState(false)
    const [passagerDetails, setPassagerDetails] = useState(false)
    const [dateGoing, setDateGoing] = useState(false)
    const [roundTrip, setRoundTrip] = useState(true)
    const [oneWay, setOneWay] = useState(false)

    const [dateGoingSelected, setDateGoingSelected] = useState('fecha ida')
    const [dateSreturnSelected, setDateSreturnSelected] = useState('fecha vuelta')

    const [dateGoingSelectedApi, setDateGoingSelectedApi] = useState('fecha ida API')
    const [dateSreturnSelectedApi, setDateSreturnSelectedApi] = useState('fecha vuelta API')
 
    const [placeholderOriginFlight, setPlaceholderOriginFlight] = useState('Origen')
    const [buttonOriginFlight, setButtonOriginFlight] = useState('Desde donde viaja')
    const [codeIataOrigin,setCodeIataOrigin]=useState('codigo iata origen')
    const [codeiataDestinity,setCodeiataDestinity]=useState('codigo iata destino')

    const [placeholderDestinityFlight, setPlaceholderDestinityFlight] = useState('destino')
    const [buttonDestinityFlight, setButtonDestinityFlight] = useState('Hacia donde viaja')

    const [DestinityFlight, setDestinityFlight] = useState('hacia donde viajas')
    
    const [passengersSelecteds, setPassengersSelecteds] = useState({
        adult: 1,
        boy: 0,
        baby: 0
    })

    const [clasSelected, setClasSelected] = useState({
        economic: true,
        ejecutive: false,
        business: false
    })

    const [clasSelectedText, setClasSelectedText] = useState('económico')
    const [buttonPassengerSelected, setButtonPassengerSelected] = useState('Elija numero de pasajeros')

   
    {/*  CHECK BOX */}
    const changeRoundTrip = () => {
            setOneWay(false)
            setRoundTrip(true)
           /*  roundTrip === false && oneWay=== true ? console.log('ida y vuelta') : console.log(' solo ida ') */
        }
    {/*  CHECK BOX */}
    const changeOneWay = () => {
        setOneWay(true)
        setRoundTrip(false)
      /*   roundTrip === true && oneWay=== false ? console.log(' solo ida ') : console.log(' ida y vuelta ') */
    }

    const originSearcherSelected = (e) => {
        const resultOrigin = e.target.attributes.category.value
        setPlaceholderOriginFlight(resultOrigin)
        setButtonOriginFlight(resultOrigin)
        setOrigin(false)
        const codeIataOrigin = e.target.attributes.codeIataFlight.value
        setCodeIataOrigin(codeIataOrigin)
    }

    const desinitySearcherSelected = (e) => {
        const resultDestinity = e.target.attributes.category.value
        setPlaceholderDestinityFlight(resultDestinity)
        setButtonDestinityFlight(resultDestinity)
        setDestinity(false)
        const codeIataDestinity = e.target.attributes.codeIataFlight.value
        setCodeiataDestinity(codeIataDestinity)
    }

    const handleNumber = (tipe, operation) => {
        setPassengersSelecteds((prev) => {
            return {
                ...prev, [tipe]: operation === 'increase' ? passengersSelecteds[tipe] + 1 : passengersSelecteds[tipe] - 1
            }
        })
    }  

    const economicClasFunction = () => {
        setClasSelected({
            economic: true,
            ejecutive: false,
            business: false
        })
        setClasSelectedText('ecónomico')
    }
    const ejecutiveClasFunction = () => {
        setClasSelected({
            economic: false,
            ejecutive: true,
            business: false
        })
        setClasSelectedText('ejecutiva')
    }
    const businessClasFunction = () => {
        setClasSelected({
            economic: false,
            ejecutive: false,
            business: true
        })
        setClasSelectedText('business')
    }
    const passengerContinue = () => {
        const data = `${passengersSelecteds.adult} adulto${passengersSelecteds.boy ? ` ${passengersSelecteds.boy} · niño ·` : ``} ${passengersSelecteds.baby ? `${passengersSelecteds.baby} bebé ` : ``}· clase ${clasSelectedText}`
        setButtonPassengerSelected(data)
        setPassagerDetails(false)
    }

    useEffect(() => {
        const handler = (e) => {
            if(!cardRef?.current?.contains(e.target)){
                setOrigin(false)
                setDestinity(false)
                setPassagerDetails(false)
                setDateGoing(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [])

    const allpassengersSelecteds = Number(passengersSelecteds.adult + passengersSelecteds.boy + passengersSelecteds.baby)

    const babyValidate =  passengersSelecteds.baby === passengersSelecteds.adult ||  passengersSelecteds.baby <  passengersSelecteds.adult ? true : false

    const searcherFlight =  () => {
        if (buttonDestinityFlight !== 'Hacia donde viaja' && buttonOriginFlight !== 'Desde donde viaja' && dateGoingSelected !== 'fecha ida' && dateSreturnSelected !== 'fecha vuelta'  &&  roundTrip === true && codeIataOrigin !== codeiataDestinity && allpassengersSelecteds <= 9 && passengersSelecteds.boy <= passengersSelecteds.adult * 2 && babyValidate === true){
        
        navigate(`/flight/selected?dateSreturnSelectedApi=${dateSreturnSelectedApi}dateGoingSelectedApi=${dateGoingSelectedApi}
        codeiataDestinity=${codeiataDestinity}codeIataOrigin=${codeIataOrigin}buttonOriginFlight=${buttonOriginFlight}
        buttonDestinityFlight=${buttonDestinityFlight}passengersSelecteds=${passengersSelecteds}
        clasSelected=${clasSelected}dateGoingSelected=${dateGoingSelected}dateSreturnSelected=${dateSreturnSelected}
        oneWay=${oneWay}roundTrip=${roundTrip}DestinityFlight=${DestinityFlight}`,
        
                {
                    state: {
                            dateSreturnSelectedApi,
                            dateGoingSelectedApi,
                            codeiataDestinity,
                            codeIataOrigin,
                            buttonOriginFlight,
                            buttonDestinityFlight, 
                            passengersSelecteds, 
                            clasSelected, 
                            dateGoingSelected, 
                            dateSreturnSelected, 
                            oneWay, 
                            roundTrip, 
                            DestinityFlight
                        }
                }
                )  }else if(dateGoingSelected !== 'fecha ida'  && buttonDestinityFlight !== 'Hacia donde viaja' && buttonOriginFlight !== 'Desde donde viaja'  && oneWay === true && codeIataOrigin !== codeiataDestinity && allpassengersSelecteds <= 9 && passengersSelecteds.boy <= passengersSelecteds.adult * 2 && babyValidate === true){
                    
                    navigate(`/flight/selected?dateSreturnSelectedApi=${dateSreturnSelectedApi}dateGoingSelectedApi=${dateGoingSelectedApi}
                    codeiataDestinity=${codeiataDestinity}codeIataOrigin=${codeIataOrigin}buttonOriginFlight=${buttonOriginFlight}
                    buttonDestinityFlight=${buttonDestinityFlight}passengersSelecteds=${passengersSelecteds}
                    clasSelected=${clasSelected}dateGoingSelected=${dateGoingSelected}dateSreturnSelected=${dateSreturnSelected}
                    oneWay=${oneWay}roundTrip=${roundTrip}DestinityFlight=${DestinityFlight}`,
                    
                            {
                                state: {
                                        dateSreturnSelectedApi,
                                        dateGoingSelectedApi,
                                        codeiataDestinity,
                                        codeIataOrigin,
                                        buttonOriginFlight,
                                        buttonDestinityFlight, 
                                        passengersSelecteds, 
                                        clasSelected, 
                                        dateGoingSelected, 
                                        dateSreturnSelected, 
                                        oneWay, 
                                        roundTrip, 
                                        DestinityFlight
                                    }
                            }
                            )
                }else{
                    navigate()
                }
               
    }
    
  return (
    <div className='flightsHeader'>
            <div className='flightsHeader_img'>
                <img src={HeaderImg} alt="Header" />
            </div>
            <div className='flightsHeader_info'>
                <div className='flightsHeader-info_flight'>
                        <div className='flightsHeader-info-flight_content'>
                            
                            <div className='flightsHeader_logo'>
                                <Airplane size="32" color="white" variant="Bold"/>
                                <h3>vueloss</h3>
                            </div>
                            <div className='flight_sites'>
                                <div className='flight_sites_'>
                                    <div className='flight_site' onClick={() => setOrigin(!origin)}>
                                        <h2>origen</h2>

                                        {buttonDestinityFlight === buttonOriginFlight?
                                        <p style={{color: 'red'}}>Cambia tu origen</p>
                                        :
                                        <p>{buttonOriginFlight}</p>
                                        }
                                      
                                    </div>
                                    {
                                     origin && <FlightsDesinitySearcher
                                        placeholder={placeholderOriginFlight} 
                                        setSearch={setSearch}
                                        cardRef={cardRef} 
                                        origins={origins} 
                                        loadingClass='flight_loadingCitiesOrigin'
                                        flightClass='flight_searchCitiesOrigin' 
                                        desinitySearcherSelected={originSearcherSelected}/>
                                    }
                                    <Airplane className='flight-sites_airplane' size="32" color="white" variant="Bold"/>
                                    <div className='flight_site' onClick={() => setDestinity(!destinity)}>
                                        <h2>destino</h2>

                                       {buttonDestinityFlight === buttonOriginFlight?
                                       <p style={{color: 'red'}}>Cambia tu destino</p> :
                                       <p>{buttonDestinityFlight}</p>
                                       }
                                       
                                    </div>
                                    { destinity && <FlightsDesinitySearcher 
                                    placeholder={placeholderDestinityFlight} 
                                    setSearch={setSearch}
                                    cardRef={cardRef}
                                    origins={origins} 
                                    loadingClass='flight_loadingCitiesDestinity'
                                    flightClass='flight_searchCitiesDestinity' 
                                    desinitySearcherSelected={desinitySearcherSelected}/>
                                    }
                                    <div className='flight_passengers' onClick={() => setPassagerDetails(!passagerDetails)}>
                                        <h2>Pasajeros <User size="30" color="#004274"/></h2>
                                        { passengersSelecteds.adult + passengersSelecteds.boy +  passengersSelecteds.baby > 9 || passengersSelecteds.boy > passengersSelecteds.adult * 2 || passengersSelecteds.baby > passengersSelecteds.adult ?
                                        <p style={{color: 'red'}}>Numero de pasajeros invalido</p>
                                        :
                                        <p>{buttonPassengerSelected}</p>
                                    }
                                        
                                    </div>
                                    {passagerDetails && <FlightsPassengerDetails 
                                    cardRef={cardRef} 
                                    passengerContinue={passengerContinue} 
                                    handleNumber={handleNumber} 
                                    adultNum={passengersSelecteds.adult} 
                                    boyNum={passengersSelecteds.boy} 
                                    babyNum={passengersSelecteds.baby} 
                                    passengersSelecteds={passengersSelecteds} 
                                    clasSelected={clasSelected} 
                                    economicClasFunction={economicClasFunction} 
                                    ejecutiveClasFunction={ejecutiveClasFunction} 
                                    businessClasFunction={businessClasFunction}  />
                                    }
                                </div>
                            </div>

                           {/*  CHECK BOX */}
                            <div className='flight_selectContainer'>
                                <div className='flight_select'>
                                    <div className='flight_select_'>
                                        <div onClick={changeRoundTrip}>
                                            {roundTrip ?
                                                <RecordCircle style={{ cursor: 'pointer' }} size="32" color="white"/>
                                                :
                                                <Record style={{ cursor: 'pointer' }}    size="32" color="white"/>
                                            }
                                        </div>
                                        <p>Ida y vuelta</p>
                                    </div>
                                    <div className='flight_select_'>
                                        <div onClick={changeOneWay}>
                                            {oneWay ?
                                                <RecordCircle style={{ cursor: 'pointer' }} size="32" color="white"/>
                                                :
                                                <Record style={{ cursor: 'pointer' }}    size="32" color="white"/>
                                            }
                                        </div>
                                        <p>Solo ida</p>
                                    </div>
                                </div>
                            </div>



                            <div className='flight_dates'>
                                <div className='flight_dates_'>
                                    <div className='flight_date' onClick={() => setDateGoing(!dateGoing)}>
                                        <h2>{dateGoingSelected}</h2>
                                        <div>
                                            <Calendar size="32" color="#004274" variant="Bold"/>
                                        </div>
                                    </div>
                                    {dateGoing &&
                                        <FlightsDateGoing 
                                        oneWay={oneWay} 
                                        roundTrip={roundTrip} 
                                        cardRef={cardRef} 
                                        setDateGoingSelected={setDateGoingSelected}
                                        setDateGoingSelectedApi={setDateGoingSelectedApi}  
                                        setDateSreturnSelected={setDateSreturnSelected}
                                        setDateSreturnSelectedApi={setDateSreturnSelectedApi} 
                                        searcherFlight={searcherFlight}/>
                                    }
                                    {roundTrip ?
                                        <div className='flight_date'>
                                            <h2>{dateSreturnSelected}</h2>
                                            <div>
                                                <Calendar size="32" color="#004274" variant="Bold"/>
                                            </div>
                                        </div>
                                        :
                                        <div className='flight_dateNone'>
                                            <h2>fecha vuelta</h2>
                                            <div>
                                                <Calendar size="32" color="#004274" variant="Bold"/>
                                            </div>
                                        </div>
                                    }
                                    <Outlet />
                                    
                                    <button className='flight_searcher'  onClick={searcherFlight }>  
                                        <div>
                                            <SearchNormal1 size="45" color="#004274"/>
                                        </div>
                                    </button>
                                   
                                </div>
                            </div>
                        </div>
                </div>
                <div className='flightsHeader-info_text'>
                    <div className='flightsHeader-info-text_content'>
                        <h1>vuelos</h1>
                        <p>el mundo espera por ti!, que vuelo elegir</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FlightsHeader