import { Grid } from '@material-ui/core'
import React from 'react'
import Chekout from '../../Components/chekout/Checkout.jsx'
import FlightsCheckoutData from '../../Components/FlightsCheckoutData/FlightsCheckoutData.jsx'


import './Assets/styles.css'

const FlightsCheckout = () => {
  return (
    <Grid container justifyContent='center' >
    <div style={{ width: '100%', height: '85px' , backgroundColor: '#004274'}} />
       <Chekout/>
      {/*  <FlightsCheckoutData /> */}
    </Grid >
  )
}

export default FlightsCheckout

