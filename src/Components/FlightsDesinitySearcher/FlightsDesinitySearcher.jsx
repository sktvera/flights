import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './Assets/styles.css'

//flight_searchCities
const FlightsDesinitySearcher = ({ origins,setSearch, placeholder, cardRef, flightClass, desinitySearcherSelected}) => {

    const filterCity = async (e) => {
        const searcher = e.target.value
        setSearch(searcher)
    }
    
    
        return (
            <div className={flightClass} ref={cardRef}>
                <div className='flight-searchCities_input'>
                    <input type="text" placeholder={placeholder}  onChange={filterCity}  required/>
                    {origins.length > 0 ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z" stroke="#004274" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m7.75 12 2.83 2.83 5.67-5.66" stroke="#004274" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                :
                <CircularProgress />
                }
                    
                </div>
                <div className='flight-searchCities_cities'>
                    {origins.map((cityData) => {
                      
                        return (
                            <div className='cityData_result'>
                                <button 
                                style={{ 
                                    border: 'none', 
                                    width: '100%', 
                                    height: '50px', 
                                    position: 'absolute', 
                                    top: '0', 
                                    display: 'flex', 
                                    display: 'block', 
                                    zIndex: 6, 
                                    backgroundColor: 'rgba(0, 0, 0, 0)', 
                                    cursor: 'pointer'}}
                                    codeIataFlight={`${cityData.iata}`} 
                                    category={` ${cityData.name} - ${cityData.iata}`} 
                                    onClick={desinitySearcherSelected} key={cityData.id} />
                                    <div className='cityData'>
                                        {/* <div className='cityData_img'>
                                            <p>{cityData.iata}</p>
                                        </div> */}
                                        <div className='cityData_text'>
                                            <div className='cityData_cityCountry'>
                                            <p>{cityData.city} - {cityData.country}</p>
                                            </div>
                                            <div className='cityData_abr'>
                                                <p>{cityData.iata}</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
          )
    
   
 
}

export default FlightsDesinitySearcher