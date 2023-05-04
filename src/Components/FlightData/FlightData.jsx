
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import ChooseLuggage from './Assets/Img/ChooseLuggage.png'
import Selectedluggage from './Assets/Img/Selectedluggage.png'
import ChooseLuggageTwo from './Assets/Img/ChooseLuggageTwo.png'
import Airplane from './Assets/Img/Airplane.png'

import Modal from '@mui/material/Modal';
import { Box } from '@material-ui/core'

import RoundTripGoing from '../RoundTrip/RoundTripGoing'
import RoundTripReturn from '../RoundTrip/RoundTripReturn'
import { Button, Hidden } from '@material-ui/core'
import UpsellSelectedFamiliesRoundTrip from '../UpsellSelectedFamiliesRoundTrip/UpsellSelectedFamiliesRoundTrip'
import UpsellSelectedFamiliesOneWay from '../UpsellSelectedFamiliesOneWay/UpsellSelectedFamiliesOneWay'

import './Assets/styles.css'


const FlightData = (props) => {

const[openLuggageFamilies, setOpenLuggageFamilies] =useState(false)

const nameOriginSlice = props.nameOriginSlice
const nameDestinySlice = props.nameDestinySlice

const passengersSelected = props.passengersSelected
const oneWay = props.oneWay 
const roundTrip = props.roundTrip
const segmentsGoing = props.Seg1 ?? []
const segmentsReturn = props.Seg2 ?? []
const recommendation = props.recommendation ?? []

const priceWithoutTaxes = new Intl.NumberFormat().format(recommendation.recPriceInfo.monetaryDetail[0].amount)
const taxes = new Intl.NumberFormat().format(recommendation.recPriceInfo.monetaryDetail[1].amount)
const freePrice = Number(recommendation.recPriceInfo.monetaryDetail[0].amount)
const taxesPrice = Number(recommendation.recPriceInfo.monetaryDetail[1].amount)
const totalPrice = freePrice + taxesPrice
const totalPriceJson = new Intl.NumberFormat().format(totalPrice)
const navigate = useNavigate()

const [FlightSelectedGoing, setFlightSelectedGoing] =useState({})
const [FlightSelectedReturn, setFlightSelectedReturn] =useState({})

const[recommendationInformationGoing, setRecommendationInformationGoing] =useState({})
const[recommendationInformationReturn, setRecommendationInformationReturn] =useState({})

const[dataCabin,setDataCabin]=useState()
const[dataComponents,setDataComponents]=useState()
const[tittleFamilies, setTittleFamilies]=useState('Elige como deseas volar, selecciona el plan que se adecue más a ti')

const sendDataflight =  () => {
      
      navigate(`/flightsCheckout`,{state: {totalPriceJson,taxes,priceWithoutTaxes,FlightSelectedGoing, FlightSelectedReturn,recommendationInformationGoing, recommendationInformationReturn, oneWay, roundTrip, passengersSelected, dataCabin, dataComponents}})
}

const handleLuggageFamilies = ()=>{
      setOpenLuggageFamilies(true)
}

const [openModalFamiliesOrChekout, setOpenModalFamiliesOrChekout] = React.useState(false);



const sendCloseModalFamiliesOrChekout = ()=>{
      setOpenModalFamiliesOrChekout(false)
}
const sendOpenModalFamiliesOrChekout = ()=>{
      setOpenModalFamiliesOrChekout(true)
}

// ROUND TRIP ONLY
if(oneWay === false && roundTrip === true ){
return (
      <div className='containedSegments'>      
            <div className='flight_results'>
                  <div className='flight_results_ itemflight_results'>
                        <div>
                              <div>
                                    <div className='flight-results_going'>
                                          <div className='flight-results_going_ '>
                                                <div className='flight-results-going_date'>
                                                      <div className='airplane_img'>
                                                            <img src={Airplane} alt="Airplane" />
                                                      </div>
                                                      <div className='tittleFlightSegment'>
                                                            <p className='flight-result-tittle'>Ida</p>
                                                            {segmentsGoing.map((going,key)=>{
                                                            return key < 1 ?(
                                                            <p className='tittlesFontSegment'  key={key}>{going.segments[0].productDateTime.dateOfDeparture}</p>
                                                            ):null})}
                                                      </div>
                                                </div>
                                          </div>
                                          <div className='flight-results-going_details'>
                                                <div>
                                                      {segmentsGoing.map((going,key)=>{
                                                            return key < 1 ?(
                                                                  <p className='tittlesFontSegment' key={key}>{going.segments[0].location[0].locationId}</p>
                                                            ):null})}
                                                      <p className='tittlesFontSegment' style={{  fontSize: '12px',  }}>{nameOriginSlice}</p>
                                                </div>
                                          </div>
                                          <div className='flight-results-going_details-Box'>
                                                <div>
                                                      {segmentsGoing.map((going,key)=>{
                                                      const element = going.segments;
                                                      return key < 1 ?(
                                                      <p className='tittlesFontSegment' key={key}>{going.segments[element.length - 1].location[1].locationId}</p>
                                                      ):null})}
                                                      <p className='tittlesFontSegment' style={{   fontSize: '12px',  }}>{nameDestinySlice}</p>
                                                </div>
                                          </div>
                                    </div>                 
                                    <div>
                                          <RoundTripGoing  
                                          going={segmentsGoing}
                                          recommendation={recommendation}
                                          setFlightSelectedGoing={setFlightSelectedGoing}
                                          setRecommendationInformationGoing={setRecommendationInformationGoing}
                                          />
                                    </div> 
                                    <div className='flight-results_going'>
                                          <div className='flight-results_going_ '>
                                                <div className='flight-results-going_date'>
                                                      <div className='airplane_img'>
                                                            <img src={Airplane} alt="Airplane" />
                                                      </div>
                                                      <div className='tittleFlightSegment'>          
                                                            <p className='flight-result-tittle'>Vuelta</p> 
                                                            {segmentsReturn.map((going,key)=>{
                                                                  return key < 1 ?(
                                                                        <p className='tittlesFontSegment' key={key}>{going.segments[0].productDateTime.dateOfDeparture}</p>
                                                                  ):null})}
                                                      </div>
                                                </div>
                                          </div>
                                          <div className='flight-results-going_details'>
                                                <div>
                                                {segmentsReturn.map((going,key)=>{
                                                      return key < 1 ?(
                                                            <p className='tittlesFontSegment' key={key}>{going.segments[0].location[0].locationId}</p>
                                                            ):null})}
                                                      <p className='tittlesFontSegment' style={{  fontSize: '12px' }}>{nameDestinySlice}</p>
                                                </div>
                                          </div>
                                          <div className='flight-results-going_details'>
                                                <div>
                                                {segmentsReturn.map((going,key)=>{
                                                      return key < 1 ?(
                                                            <p className='tittlesFontSegment' key={key}>{going.segments[0].location[1].locationId}</p>
                                                            ):null})}
                                                      <p className='tittlesFontSegment' style={{  fontSize: '12px' }}>{nameOriginSlice}</p>
                                                </div>
                                          </div>
                                    </div>        
                                    <div>
                                          <RoundTripReturn 
                                          going={segmentsReturn}
                                          recommendation={recommendation}
                                          setFlightSelectedReturn={setFlightSelectedReturn}
                                          setRecommendationInformationReturn={setRecommendationInformationReturn}
                                          />
                                    </div>  
                              </div>

                        </div>
                  </div>
                  <Hidden  only={['xs']}>
                        <div className='flight-results_price itemflight_results' >
                              <div className='flight-results_price_'>
                                          <div className='results_price_Item '>
                                                <p className='priceTaifa'  
                                                      style={{ fontSize: '26px', fontWeight: '600' }}>
                                                            {priceWithoutTaxes}
                                                </p>
                                                <p  
                                                      style={{ fontSize: '20px', fontWeight: '400' }}>
                                                      impuestos: {taxes}
                                                </p>
                                                            
                                          </div>
                                          <p > Precio final con impuestos: {totalPriceJson}</p>
                                          
                                    <div className='flight-results-price_ButtonToBuy '>

                                   
                                    <Button className='buttonSelectedFlight' variant="contained"  onClick={sendOpenModalFamiliesOrChekout}>Comprar</Button>
                                    </div>
                              </div>
                        </div>
                  </Hidden>
            </div>
            <div>
                  <div
                  className='contained-addLuggage'
                  onClick={openLuggageFamilies === false ? handleLuggageFamilies : ()=>{setOpenLuggageFamilies(false)}}
                  >
                        <div
                        className='addLuggage'
                        >
                              <div className='addLuggage_'>
                                    <div className='addLuggage_img'>
                                          <img src={ChooseLuggage} alt="agregar equipaje" />
                                    </div>
                                    <div className='addLuggage_text'>
                                          <h2>{tittleFamilies}</h2>
                                          <div className='addLuggage_img'>
                                                {openLuggageFamilies === false ? 
                                                <img src={Selectedluggage} alt="agregar equipaje" />
                                                :
                                                <img src={Selectedluggage} className='SelectedluggageRotate' alt="agregar equipaje" />
                                                }
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {openLuggageFamilies === true ? 
                  <UpsellSelectedFamiliesRoundTrip
                  FlightSelectedGoing={FlightSelectedGoing}
                  FlightSelectedReturn={FlightSelectedReturn}
                  recommendation={recommendation}
                  passengersSelected={passengersSelected}
                  setOpenLuggageFamilies={setOpenLuggageFamilies}
                  setDataCabin={setDataCabin}
                  setDataComponents={setDataComponents}
                  setTittleFamilies={setTittleFamilies}
                  />
                  :
                  <div/>
                  }
            </div>
            <Hidden  only={['sm','md','lg','xl']}>
                  <div className='flight-results_price-xs itemflight_results' >
                              <div className='flight-results_price_xs'>
                                          <div className='results_price_Item itemResultTitle-xs'>
                                                <p className='priceTaifa'  
                                                      style={{ fontSize: '26px', fontWeight: '600' }}>
                                                            {priceWithoutTaxes}
                                                </p>
                                                <p  
                                                      style={{ fontSize: '20px', fontWeight: '400' }}>
                                                      impuestos: {taxes}
                                                </p>           
                                          </div>
                                          <p className='itemResultTitle-xs'> Precio final con impuestos: {totalPriceJson}</p>
                                          
                                    <div className='flight-results-price_ButtonToBuy itemResultTitle-xs'>
                                    <Button className='buttonSelectedFlight' variant="contained"  onClick={sendDataflight}>Comprar</Button>
                                    </div>
                              </div>
                  </div>
            </Hidden>
            {openModalFamiliesOrChekout ? 
<div>
      <Modal 
      open={sendOpenModalFamiliesOrChekout}
      onClose={sendCloseModalFamiliesOrChekout}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
            <Box className='modal-familiesOrCheckout'>
                  <div className='containedModalFamiliesOrCheckout'>
                        <div className='itemsColumnsModalFamilies'>
                              <div className='img-AndTittleModalFamilies'>
                                    <div className='familiesOrCheckoutModal_img'>
                                          <img src={ChooseLuggageTwo} alt="agregar equipaje" />
                                    </div>
                                   <div className='familiesOrCheckoutModal-paragraphs'>
                                   <div>
                                   <p className='tittleModalFamiliesOrCheckout'>¿Deseas incluir equipaje?</p>
                                    <p className='subTittleModalFamiliesOrCheckout'>Selecciona la tarifa que más se ajuste a ti</p>
                                   </div>
                                   </div>
                              </div>
                              <div className='familiesOrCheckoutModal-buttons'>
                                    <Button className='buttonSelectedFlight familiesOrCheckoutModal-buttons-items' variant="contained"  onClick={()=>[setOpenLuggageFamilies(true),  setOpenModalFamiliesOrChekout(false)]}>Selecciona tu tarifa</Button>
                                    <Button className='buttonSelectedFlight familiesOrCheckoutModal-buttons-items' variant="contained"  onClick={sendDataflight}>Continuar</Button>
                              </div>
                        </div>
                  </div>
            </Box>
      </Modal>
</div>
:
<div/>}
      </div>
)}
//ONE WAY
else
{
      return (
            <div className='containedSegments'>      
                  <div className='flight_results'>
                        <div className='flight_results_ itemflight_results'>
                              <div>
                                    <div>
                                          <div className='flight-results_going'>
                                                <div className='flight-results_going_'>
                                                <div className='flight-results-going_date'>
                                                      <div className='airplane_img'>
                                                            <img src={Airplane} alt="Airplane" />
                                                      </div>
                                                           <div className='tittleFlightSegment'>
                                                           <p className='flight-result-tittle'>Ida</p>
                                                          {segmentsGoing.map((going,key)=>{
                                                            return key < 1 ?(
                                                                  <p className='tittlesFontSegment' key={key}>{going.segments[0].productDateTime.dateOfDeparture}</p>
                                                            ):null
                                                           })
                                                          }
                                                           </div>
                                                      </div>
                                                </div>
                                                <div className='flight-results-going_details'>
                                                      <div>
                                                {segmentsGoing.map((going,key)=>{
                                                      return key < 1 ?(
                                                            <p className='tittlesFontSegment' key={key}>{going.segments[0].location[0].locationId}</p>
                                                      ):null
                                                     })
                                                    }
                                                            <p className='tittlesFontSegment' style={{  fontSize: '12px'}}>{nameOriginSlice}</p>
                                                      </div>
                                                </div>
                                                <div className='flight-results-going_details'>
                                                      <div>
                                                {segmentsGoing.map((going,key)=>{
                                                       const element = going.segments;
                                                      return key < 1 ?(
                                                            <p className='tittlesFontSegment' key={key}>{going.segments[element.length - 1].location[1].locationId}</p>
                                                      ):null
                                                     })
                                                    }
                                                            <p className='tittlesFontSegment' style={{ fontSize: '12px' }}>{nameDestinySlice}</p>
                                                      </div>
                                                </div>
                                          </div>                 
                                          <div>
                                                <RoundTripGoing  
                                                going={segmentsGoing}
                                                recommendation={recommendation}
                                                setFlightSelectedGoing={setFlightSelectedGoing}
                                                setRecommendationInformationGoing={setRecommendationInformationGoing}
                                                passengersSelected={passengersSelected}
                                                setOpenLuggageFamilies={setOpenLuggageFamilies}
                                                setDataCabin={setDataCabin}
                                                setDataComponents={setDataComponents}
                                                />
                                          </div> 
                                    </div>
                                    </div>
                                    </div>

                  <Hidden  only={['xs']}>
                        <div className='flight-results_price itemflight_results' >
                              <div className='flight-results_price_'>
                                          <div className='results_price_Item '>
                                                <p className='priceTaifa'  
                                                      style={{ fontSize: '26px', fontWeight: '600' }}>
                                                            {priceWithoutTaxes}
                                                </p>
                                                <p  
                                                      style={{ fontSize: '20px', fontWeight: '400' }}>
                                                      impuestos: {taxes}
                                                </p>
                                                            
                                          </div>
                                          <p > Precio final con impuestos: {totalPriceJson}</p>
                                          
                                    <div className='flight-results-price_ButtonToBuy '>

                                    <Button className='buttonSelectedFlight' variant="contained"  onClick={sendDataflight}>Comprar</Button>
                                    </div>
                              </div>
                        </div>
                  </Hidden>
                  </div>
                        <div>
                              <div>
                                    <div
                                    className='contained-addLuggage'
                                    onClick={openLuggageFamilies === false ? handleLuggageFamilies : ()=>{setOpenLuggageFamilies(false)}}
                                    >
                                          <div
                                          className='addLuggage'
                                          >
                                                <div className='addLuggage_'>
                                                      <div className='addLuggage_img'>
                                                            <img src={ChooseLuggage} alt="agregar equipaje" />
                                                      </div>
                                                      <div className='addLuggage_text'>
                                                            <h2>{tittleFamilies}</h2>
                                                            <div className='addLuggage_img'>
                                                                  {openLuggageFamilies === false ? 
                                                                  <img src={Selectedluggage} alt="agregar equipaje" />
                                                                  :
                                                                  <img src={Selectedluggage} className='SelectedluggageRotate' alt="agregar equipaje" />
                                                                  }
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    {openLuggageFamilies === true ? 
                                    <UpsellSelectedFamiliesOneWay
                                    FlightSelectedGoing={FlightSelectedGoing}
                                    recommendation={recommendation}
                                    passengersSelected={passengersSelected}
                                    setOpenLuggageFamilies={setOpenLuggageFamilies}
                                    setDataCabin={setDataCabin}
                                    setDataComponents={setDataComponents}
                                    setTittleFamilies={setTittleFamilies}
                                    />
                                    :
                                    <div/>
                                    }
                              </div>
                              <Hidden  only={['sm','md','lg','xl']}>
                  <div className='flight-results_price-xs itemflight_results' >
                              <div className='flight-results_price_xs'>
                                          <div className='results_price_Item itemResultTitle-xs'>
                                                <p className='priceTaifa'  
                                                      style={{ fontSize: '26px', fontWeight: '600' }}>
                                                            {priceWithoutTaxes}
                                                </p>
                                                <p  
                                                      style={{ fontSize: '20px', fontWeight: '400' }}>
                                                      impuestos: {taxes}
                                                </p>           
                                          </div>
                                          <p className='itemResultTitle-xs'> Precio final con impuestos: {totalPriceJson}</p>
                                          
                                    <div className='flight-results-price_ButtonToBuy itemResultTitle-xs'>
                                    <Button className='buttonSelectedFlight' variant="contained"  onClick={sendDataflight}>Comprar</Button>
                                    </div>
                              </div>
                  </div>
            </Hidden>
                        </div>   
            </div> 
)}
}
    
export default FlightData

