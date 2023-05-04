import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Flights from './Routes/Flights/Flights';
import Footer from './Components/Footer/Footer';
import FlightSelected from './Routes/FlightSelected/FlightSelected';
import FlightDetails from './Routes/FlightDetails/FlightDetails';
import ResultPayment from './Routes/ResultPayment/ResultPayment';
import RateClass from './Routes/RateClass/RateClass';
import Paymentgateway from './Routes/Paymentgateway/Paymentgateway';
import "./App.css"

//Redux
import { Provider } from 'react-redux';
import store from './store';
import FlightsCheckout from './Routes/FlightsCheckout/FlightsCheckout';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Flights/>}/>
          <Route path='/flights' element={<Flights />}/>
          <Route path='/flight/selected' element={<FlightSelected/>}/>
          {/* 
         
          <Route path='/flightDetails' element={<FlightDetails/>}/>
          <Route path='/flightsCheckout' element={<FlightsCheckout />} />
          <Route path='/resultPayment' element={<ResultPayment/>} />
          <Route path='/rateClass' element={<RateClass/>} />
          <Route path='/paymentgateway' element={<Paymentgateway/>} />      */}
        </Routes>
        <Footer />
      </div>
    </Provider>
  )
} 

export default App