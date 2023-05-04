import React, { useEffect, useState } from 'react'
import { TextField  } from '@mui/material';
import './Assets/Contact/styles.css'

const Contact =({dataContact, setDataContact, setValidateSendContact, validateSendContact})=> {

/*
*-------------VALIDATION FORMS-------------------- 
*/
const [errorsEmail, setErrorsEmail ] = useState()
const [LegendEmail, setLegendEmail ] = useState('')
const[validateEmail, setValidateEmail] = useState(false)

const [errorsCodePhoneNumber, setErrorsCodePhoneNumber ] = useState()
const [LegendCodePhoneNumber, setLegendCodePhoneNumber ] = useState('')
const[validateCodePhoneNumber, setValidateCodePhoneNumber] = useState(false)

const [errorsNumberPhone, setErrorsNumberPhone ] = useState()
const [LegendNumberPhone, setLegendNumberPhone ] = useState('')
const[validateNumberPhone , setValidateNumberPhone ] = useState(false)

const [errorsAddress, setErrorsAddress ] = useState()
const [LegendAddress, setLegendAddress ] = useState('')
const[validateAddress, setValidateAddress] = useState(false)
/*
*-------------END-------------------- 
*/
/* console.log(
  'validateEmail',validateEmail,' - ',
  'validateCodePhoneNumber',validateCodePhoneNumber,' - ',
  'validateNumberPhone',validateNumberPhone,' - ',
  'validateAddress',validateAddress,' - ',
  'validateSendContact',validateSendContact,' - '
) */

useEffect(()=>{
  if(validateEmail === true && validateCodePhoneNumber === true && validateNumberPhone === true && validateAddress === true ){
    setValidateSendContact(true)
    }

})

  const contactAll = 'contact'

    const handleChangeUserOne = (e) => {
      const value = e.target.value
      setDataContact({
          ...dataContact,
          [e.target.name]: value, contactAll
      })
/*
*-------------------------------ERRORS EMAIL--------------------   
*/
  const regexIsEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!regexIsEmail.test(dataContact.Email)){
    setValidateEmail(false)
    setErrorsEmail(true)
    setLegendEmail("Email Invalido")
  }else{
    setValidateEmail(true)
    setErrorsEmail(false)
    setLegendEmail("")
  }
/*
*--------------------END-------------------- 
*/
/*
*-------------------------------ERRORS  CODE PHONE NUMBER-------------------- 
*/
  if(dataContact.CodePhoneNumber.length > 3 || dataContact.CodePhoneNumber.length <= 0){
    setValidateCodePhoneNumber(false)
    setErrorsCodePhoneNumber(true)
    setLegendCodePhoneNumber("Escriba El Indicativo")
  }else{
    setValidateCodePhoneNumber(true)
    setErrorsCodePhoneNumber(false)
    setLegendCodePhoneNumber("")
  }
/*
*--------------------END-------------------- 
*/
/*
*-------------------------------ERRORS NUMBER PHONE-------------------- 
*/
const regexIsNumber = /^[0-9]*$/;
  if(!regexIsNumber.test(dataContact.NumberPhone)){
    setValidateNumberPhone(false)
    setErrorsNumberPhone(true)
    setLegendNumberPhone("Numero Telefonico Invalido")
  }else{
    setValidateNumberPhone(true)
    setErrorsNumberPhone(false)
    setLegendNumberPhone("")
  }
/*
*--------------------END-------------------- 
*/
/*
*-------------------------------ERRORS ADDRESS-------------------- 
*/
  if(dataContact.Address.length <= 1){
    setValidateAddress(false)
    setErrorsAddress(true)
    setLegendAddress("Direccion invalida")
  }else{
    setValidateAddress(true)
    setErrorsAddress(false)
    setLegendAddress("")
  }   
    }

  return (
    <React.Fragment>
    <div className='containerPassengersInfo'>
        <h3>
        Contacto
        </h3>
        <label>Estos datos se utilizarán para informarle sobre su reserva.</label>
        <div className='inputsContact '>
            <div className='inputContact'>
            <label>Correo Electronico</label>
                <TextField
                 label="Email"
                 variant="outlined"
                 type='email'
                 name='Email'
                 onChange={handleChangeUserOne}
                 error={errorsEmail}
                helperText={LegendEmail}
                />
            </div>
            <div className='inputContact '>
            <label>Indicativo Celular</label>
            <TextField
                 label="Codigo"
                 variant="outlined"
                 type='text'
                 name='CodePhoneNumber'
                 onChange={handleChangeUserOne}
                 error={errorsCodePhoneNumber}
                helperText={LegendCodePhoneNumber}
                />
            </div>
            
        </div>

        <div className='inputContact inputContactAddress'>
            <label>Numero Telefonico</label>
                <TextField
                 label="Numero telefonico"
                 variant="outlined"
                 type='number'
                 name='NumberPhone'
                 onChange={handleChangeUserOne}
                 error={errorsNumberPhone}
                helperText={LegendNumberPhone}
                />
            </div>
        <div className='inputContact inputContactAddress'>
        <label>Direccion Residencia</label>
                <TextField
                 label="Direccion"
                 variant="outlined"
                 type='text'
                 name='Address'
                 onChange={handleChangeUserOne}
                 error={errorsAddress}
                helperText={LegendAddress}
                />
            </div>
        
    </div>
    </React.Fragment>
  )
}

export default Contact
