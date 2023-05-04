

import React from 'react'
import{Box, Checkbox, Grid, FormControl, TextField, Hidden, Button} from '@material-ui/core'
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { useNavigate } from 'react-router-dom'
import { useLocation} from 'react-router';
import './Assets/styles.css'
import { useState } from 'react'
import SuccessfulPurchase from '../SuccessfulPurchase/SuccessfulPurchase'

const FlightCheKoutPaymentCard = () => {

    const [errorsNumberCard, setErrorsNumberCard ] = useState()
    const [legendNumberCard, setLegendNumberCard ] = useState('')
    const[validateNumberCard, setValidateNumberCard] = useState(false)

    const [errorsNameUserCard, setErrorsNameUserCard ] = useState()
    const [LegendNameUserCard, setLegendNameUserCard ] = useState('')
    const[validateNameUserCard, setValidateNameUserCard] = useState(false)
    
    const [errorsDocumentUser, setErrorsDocumentUser] = useState()
    const [LegendDocumentUser, setLegendDocumentUser ] = useState('')
    const[validateDocumentUser, setValidateDocumentUser] = useState(false)

    const [errorsExpiration, setErrorsExpiration ] = useState()
    const [LegendExpiration, setLegendExpiration ] = useState('')
    const[validateExpiration, setValidateExpiration] = useState(false)

    const [errorsCodeSecurity, setErrorsCodeSecurity ] = useState()
    const [LegendCodeSecurity, setLegendCodeSecurity ] = useState('')
    const[validateCodeSecurity, setValidateCodeSecurity] = useState(false)


  const location = useLocation();
  const navigate = useNavigate()
  const [dataPaymentCard, setDataPaymentCard] = useState({});




  const handleInfomationCard = (e) => {
    const value = e.target.value
    setDataPaymentCard({
      ...dataPaymentCard,
      [e.target.name]: value
  })   

/*
*-------------------------------ERRORS Number Card--------------------   
*/
  if(false){
    setValidateNumberCard(false)
    setErrorsNumberCard(true)
    setLegendNumberCard("numero de tarjeta invalido")
  }else{
    setValidateNumberCard(true)
    setErrorsNumberCard(false)
    setLegendNumberCard("")
  }
/*
*------------END--------------------   
*/
/*
*-------------------------------ERRORS Name User Card--------------------   
*/
if(false){
    setValidateNameUserCard(false)
    setErrorsNameUserCard(true)
    setLegendNameUserCard("nombre del titular invalido")
  }else{
    setValidateNameUserCard(true)
    setErrorsNameUserCard(false)
    setLegendNameUserCard("")
  }
/*
*------------END--------------------   
*/
/*
*-------------------------------ERRORS Document User--------------------   
*/
const numberDocument = Number(dataPaymentCard.documentUser)
if(dataPaymentCard.documentUser.length <= 8 || numberDocument <= 0){
    setValidateDocumentUser(false)
    setErrorsDocumentUser(true)
    setLegendDocumentUser("numero de documento invalido")
  }else{
    setValidateDocumentUser(true)
    setErrorsDocumentUser(false)
    setLegendDocumentUser("")
  }
/*
*------------END--------------------   
*/

/*
*-------------------------------ERRORS Expiration--------------------   
*/
if(false){
    setValidateExpiration(false)
    setErrorsExpiration(true)
    setLegendExpiration("fecha de expiracion invalida")
  }else{
    setValidateExpiration(true)
    setErrorsExpiration(false)
    setLegendExpiration("")
  }
/*
*------------END--------------------   
*/

/*
*-------------------------------ERRORS Code Security--------------------   
*/
if(false){
    setValidateCodeSecurity(false)
    setErrorsCodeSecurity(true)
    setLegendCodeSecurity("codigo de seguridad invalido")
  }else{
    setValidateCodeSecurity(true)
    setErrorsCodeSecurity(false)
    setLegendCodeSecurity("")
  }
/*
*------------END--------------------   
*/

}
 

const handlePurchaseSummary = ()=>{
/*   navigate(`/resultPayment`,{state:'hola'}) */
}

  return (  
<div className='bodyPaymentGate'>
    {/*  First container */}
    <Grid container className='paymentCardQuestion'>  
        <div className='firstContainet'>
        <FormControl>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >

            <Grid item xs={12}>
            <Box border={2} className='paymentCardQuestionBoxDescription paymentTitle'>
                <div>
                    <h2>¿Cómo deseas pagar?</h2>
                    <h2>localizador de reserva: {location.state.dataSavePNR[1].response.pnrHeader.reservationInfo.reservation.controlNumber}</h2>
                    <div className='paymentSubTitle'>
                        <p >Pagar ahora</p>
                        <label >Con estos medios de pago, pagas el valor que ves ahora y tienes la opción de financiar.</label>
                    </div>
                </div>
            </Box>
            </Grid>
            <Grid item xs={12}>
                <Box border={2} className='paymentCardQuestionBoxDescriptionCheckbox'>
                <FormControlLabel value="female" control={<Radio />} label="Tarejeta de credito" />
                    
                </Box>
                <Box>
                    <div className='line' style={{ width: '100%', height: '1.5px', backgroundColor: 'rgba(0, 66, 116, .2)', margin: '30px 0', borderRadius: '20px' }} />
                </Box>
                <Box border={2} className='paymentCardQuestionBoxDescriptionCheckbox'>
                    
                    <FormControlLabel value="male" control={<Radio />} label="Tarejeta de debito" />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box border={2} className='paymentAccommodation'>
                    <div>
                        <h3>Pagar al alojamiento</h3>
                    </div>
                    <div>
                        <label>El cobro será realizado bajo los términos del alojamiento, por lo que recomendamos que consultes las condiciones de pago antes de realizar la compra.</label>
                    </div>
                </Box>
                <Box>
                    <Grid item xs={12}>
                        <div className='paymentAccommodationCheck'>
                           
                            <FormControlLabel value="other" control={<Radio />}  /> 
                            
                            <Box border={2} className='paymentAccommodationCheckItem'> 
                                <p>Pagar al alojamiento</p> 
                            </Box>
                            <Box border={2} className='paymentAccommodationCheckItem'>
                                <label>No acepta cupon</label>
                            </Box>
                        </div> 
                    </Grid>
                </Box>
            </Grid>

            </RadioGroup>
            </FormControl>
        </div>  
    </Grid>
    {/*   Second container */}
    <Grid container className='paymentCardDetaiCard'>  
        <div className='secondContainer'>
            <Grid item xs={12} >
                <Box border={2}className='formCard paymentTitle'>
                <div>
                    <h2>Ingresa los datos de la tarjeta</h2>
                    <p>Promociones y forma de pago</p>
                </div>
                </Box>
            </Grid>
            <Grid item xs={12} >
                <div className='formCardContainer'>
                    <Box border={2}className='formCard'>
                       
                            <h5>NÚMERO DE TARJETA</h5>
                            <div className='formCardInputItem'>
                                <TextField
                                label=" numero de tarjeta"
                                variant="outlined"
                                name='numberCard'
                                type='number'
                                onChange={handleInfomationCard}
                                error={errorsNumberCard}
                                helperText={legendNumberCard}
                            
                                />
                            </div>
                        
                    </Box>
                    <Box border={2}className='formCard'>
                        
                            <h5>TITULAR DE LA TARJETA</h5>
                            <div className='formCardInputItem'>
                                <TextField
                              
                                label="Como figura en la tarjeta"
                                variant="outlined"
                                name='nameUserCard'
                                type='text'
                                onChange={handleInfomationCard}
                                error={errorsNameUserCard}
                                helperText={LegendNameUserCard}
                                />
                            </div>
                        
                    </Box>
                    <Box className='formCardItem'>
                        <Hidden only={['xs','sm','md']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none"><path d="M2 8.5h11.5M6 16.5h2M10.5 16.5h4" stroke="#3150FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h7.06" stroke="#3150FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 6.25H22M19.25 9V3.5" stroke="#3150FF " stroke-width="1.5" stroke-linecap="round"></path></svg>
                        </Hidden>
                    </Box>
                </div>   
            </Grid>
            <Grid>
                <Hidden only={['xl','lg']}>
                <div className='formCardContainerDataCardHidden'>
                    <Box>
                   
                        <h5>N° IDENTIFICACION</h5>
                        <div className='formCardInputItem'>
                            <TextField
                           
                            label="Ej:1000558587"
                            variant="outlined"
                            name='documentUser'
                            type='number'
                            onChange={handleInfomationCard}
                            error={errorsDocumentUser}
                            helperText={LegendDocumentUser}
                            />
                        </div>
                    
                    </Box>
                    <Box className='iconHidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none"><path d="M2 8.5h11.5M6 16.5h2M10.5 16.5h4" stroke="#3150FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h7.06" stroke="#3150FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 6.25H22M19.25 9V3.5" stroke="#3150FF " stroke-width="1.5" stroke-linecap="round"></path></svg>
                    </Box>
                </div>
                </Hidden>
            </Grid>
            <Grid item xs={12} >
                <div className='formCardContainerDataCard'>
                <Box border={2}className='formCard'>
                   
                        <h5>VENCIMIENTO</h5>
                        <div className='formCardInputItem'></div>
                        <TextField
                            label="MM/AA"
                            variant="outlined"
                            name='expiration'
                            type='text'
                            onChange={handleInfomationCard}
                            error={errorsExpiration}
                            helperText={LegendExpiration}
                        />
                    
                </Box>
                <Box border={2}className='formCard'>
                    
                        <h5>CÓD. SEGURIDAD</h5>
                        <div className='formCardInputItem'>
                            <TextField
                             label="ejm: 369"
                             variant="outlined"
                             name='codeSecurity'
                             type='number'
                             onChange={handleInfomationCard}
                             error={errorsCodeSecurity}
                             helperText={LegendCodeSecurity}
                            />
                        </div>
                   
                </Box>
                <Box border={2}className='formCard'>
                    <Hidden only={['xs','sm','md']}>
                       
                            <h5>N° IDENTIFICACION</h5>
                            <div className='formCardInputItem'>
                                <TextField
                                
                                label="Ej:1000558587"
                                variant="outlined"
                                name='documentUser'
                                type='number'
                                onChange={handleInfomationCard}
                                error={errorsDocumentUser}
                                helperText={LegendDocumentUser}
                                />
                            </div>
                       
                    </Hidden>
                </Box>
                </div>
            </Grid>
            <div className='line' style={{ width: '100%', height: '1.5px', backgroundColor: 'rgba(0, 66, 116, .2)', margin: '30px 0', borderRadius: '20px' }} />
        </div>
    </Grid>

    <Grid item xs={12} className='boxSubmit' >
        <Box className='boxSubmitItem'>
            <Checkbox/> 
            <label>
            Leí y acepto las condiciones de compra , políticas de privacidad y políticas de cambios y cancelaciones.
            </label>
        </Box>
        <Box className='boxSubmitItem'>
            {/* <Button
            className='buttonPaymentCard'
            type='submit' 
            variant="contained" 
            disableElevation
            onClick={handlePurchaseSummary}
            >
            Comprar
            </Button> */}

            <SuccessfulPurchase
            reservation={location.state.dataSavePNR[1].response.pnrHeader.reservationInfo.reservation.controlNumber}
            />
        </Box>
    </Grid>
</div>
  )
}
export default FlightCheKoutPaymentCard