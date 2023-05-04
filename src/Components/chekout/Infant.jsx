import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import CalendarChekout from '../CalendarChekout/CalendarChekout'
import {  Calendar } from 'iconsax-react'
import { Calendar as CalendarNew } from 'react-date-range';
import { useRef } from 'react'

import './Assets/Infant/styles.css'

  const Infant = ({keys, dataInfants, setDataInfants, setValidateSendInfant, validateSendInfant}) => {

    const date = new Date()
    date.setDate(date.getDate() - 670);
  
    const dateMax = new Date()
    dateMax.setDate(date.getDate() );
  

/*
*-------------VALIDATION FORMS-------------------- 
*/
const [errorsName, setErrorsName ] = useState()
const [LegendName, setLegendName ] = useState('')
const[validateName, setValidateName] = useState(false)

const [errorsLastName, setErrorsLastName ] = useState()
const [LegendLastName, setLegendLastName ] = useState('')
const[validateLastName, setValidateLastName] = useState(false)

const [errorsDocument, setErrorsDocument ] = useState()
const [LegendDocument, setLegendDocument ] = useState('')
const[validateDocument, setValidateDocument] = useState(false)

/* const [errorsDocumentType, setErrorsDocumentType ] = useState()
const [LegendDocumentType, setLegendDocumentType ] = useState('')
const[validateDocumentType, setValidateDocumentType] = useState(false) */

const [errorsgender, setErrorsgender ] = useState()
const[validategender, setValidategender] = useState(false)

/*
*-------------END-------------------- 
*/
  const infantsAll = 'infant'
  const infant = keys
  const cardRef = useRef()

  const [calendar, setCalendar] = useState(false)
  const [tittleDateOfBirth,setTittleDateOfBirth] = useState('Fecha de nacimiento')
  const[booleanDateOfBirth, setBooleanDateOfBirth] = useState()

  const [dateOneWay, setDateOneWay] = useState(new Date())
  const [age, setAge] = React.useState('');

  /* console.log(
    'validateName',validateName,' - ',
    'validateLastName',validateLastName,' - ',
    'validateDocument',validateDocument,' - ',
    'validateDocumentType',validateDocumentType,' - ',
    'validateSendInfant',validateSendInfant,' - '
  ) */

  useEffect(()=>{
    if(validateName === true && validateLastName === true && validateDocument === true && validategender === true && tittleDateOfBirth !== 'Fecha de nacimiento' ){
      setValidateSendInfant(true)
      }

  })

    const handleChangeUserOne = (event: SelectChangeEvent) => {
      const value = event.target.value
      setDataInfants({
          ...dataInfants,
          [event.target.name]: value, infant, infantsAll
      })
      setAge(event.target.value);
/*
*-------------------------------ERRORS NAME--------------------   
*/
const regexIsString = /^[a-zA-Z ]+$/;
if(!regexIsString.test(dataInfants.NameBaby)){
  setValidateName(false)
  setErrorsName(true)
  setLegendName("el nombre no debe contener numeros ni caracteres especiales")
}else{
  setValidateName(true)
  setErrorsName(false)
  setLegendName("")
}
/*
*--------------------END-------------------- 
*/
/*
*-------------------------------ERRORS LASTNAME-------------------- 
*/
if(!regexIsString.test(dataInfants.LastNameBaby)){
  setValidateLastName(false)
  setErrorsLastName(true)
  setLegendLastName("el apellido no debe contener numeros ni caracteres especiales")
}else{
  setValidateLastName(true)
  setErrorsLastName(false)
  setLegendLastName("")
}
/*
*--------------------END-------------------- 
*/
/*
*-------------------------------ERRORS DOCUMENT-------------------- 
*/

const numberDocument = Number(dataInfants.DocumentBaby)
if(dataInfants.DocumentBaby.length <= 8 || numberDocument <= 0){
  setErrorsDocument(true)
  setLegendDocument("Numero De Identificacion Invalido")
  setValidateDocument(false)
}else{
  setErrorsDocument(false)
  setLegendDocument("")
  setValidateDocument(true)
}

/*
*--------------------END-------------------- 
*/
/*
*-------------------------------ERRORS GENDER-------------------- 
*/
if(dataInfants.gender === undefined || dataInfants.gender === "" ){
  setValidategender(false)
  setErrorsgender(true)
}else{
  setValidategender(true)
  setErrorsgender(false)
}
  }
/*
*--------------------END-------------------- 
*/


 useEffect(() => {
      const handler = (e) => {
          if(!cardRef?.current?.contains(e.target)){
              
            setCalendar(false)
          }
      }
      document.addEventListener('mousedown', handler)
      return () => {
        document.removeEventListener('mousedown', handler)
      }
  }, [])

  const onChangeOnlyDate = (item) => {
    setDateOneWay(item)

    const [month, day, year] = [
      item.getMonth(),
      item.getDate(),
      item.getFullYear(),
    ];
    const yearParse = `${year}`

    setTittleDateOfBirth(item.toLocaleDateString('en-us', { day:"numeric", month:"short", year:"numeric" }))

/* 
*-----------------SAVE DATA CALENDAR ----------
*/
    setDataInfants({
      ...dataInfants,
      ["dateFree"]: `----${day}${item.toLocaleString('default', { month: 'short' })}${yearParse.substr(-2)}-`.toUpperCase(),
      ["DateBrith"]: `${year}-${month + 1}-${day}`
  }) 
/* 
*-----------------END ----------
*/
  }
  const handleActiveCalendar = () =>{
    setCalendar(!calendar)
     setBooleanDateOfBirth(true)
  }

  return (
    <React.Fragment>
    <div className='containerPassengersInfo'>
        <h3>
        Infante  {keys + 1}
        </h3>
        <label>Ingrese el nombre y apellido tal como aparecen en el pasaporte o documento de identidad de cada pasajero.</label>
        <div className='inputsInfant'>
            <div className='inputInfant'>
            <label>Nombres</label>
                <TextField
                        label="Como figura en el documento de viaje"
                        variant="outlined"
                        type='text'
                        name='NameBaby'
                        onChange={handleChangeUserOne}
                        error={errorsName}
                          helperText={LegendName}
                />
            </div>
            <div className='inputInfant'>
            <label>Apellidos</label>
                    <TextField
                            label="Como figura en el documento de viaje"
                            variant="outlined"
                            type='text'
                            name='LastNameBaby'
                            onChange={handleChangeUserOne}
                            error={errorsLastName}
                            helperText={LegendLastName}
                    />
            </div>
        </div>
        <div className='inputsAdult'>
            <div className='inputAdult'>
              <label>Numero De Documento</label>
              <TextField
                      label="Como figura en el documento de viaje"
                      variant="outlined"
                      type='number'
                      name='DocumentBaby'
                      onChange={handleChangeUserOne}
                      error={errorsDocument}
                      helperText={LegendDocument}
                />
            </div>
            {/* <div className='inputAdult'>
                          <label>Tipo De Documento</label>
                            <Select
                            className='itemSelected'
                            value={age}
                            onChange={handleChangeUserOne}
                            name={'documentTypeBaby'}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            error={errorsDocumentType}
                            helperText={LegendDocumentType}
                            >
                            <MenuItem value="">
                            <em>Tipo</em>
                            </MenuItem>
                            <MenuItem value={'CC'}>CC</MenuItem>
                            <MenuItem value={'Passport'}>Pasaporte</MenuItem>
                            </Select>
            </div> */}
            <div className='inputAdult'>
                            <label>Genero</label>
                            <Select
                            className='itemSelected'
                            value={age}
                            onChange={handleChangeUserOne}
                            name={'gender'}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            error={errorsgender}
                            >
                            <MenuItem value="">
                            <em>Genero</em>
                            </MenuItem>
                            <MenuItem value={'M'}>Masculino</MenuItem>
                            <MenuItem value={'F'}>Femenino</MenuItem>
                            </Select>
            </div>
        </div>
        <div className=''> 
           <div className='flight_dateUser-Item'>
           <div/>
           <div className='flight_dateUser' onClick={handleActiveCalendar}>
           {booleanDateOfBirth === true && tittleDateOfBirth === 'Fecha de nacimiento'?
             <>
                <h2 style={{color:'red'}}>{tittleDateOfBirth}</h2>
                <div>
                <Calendar size="32" color="#FF0000" variant="Bold"/>
                </div>
             </>
             :
             <>
                   <h2 >{tittleDateOfBirth}</h2>
                  <div>
                  <Calendar size="32" color="#004274" variant="Bold"/>
                  </div>
             </>
          }
            </div>
{/* 
*
*------------CALENDAR!! ------------------
*
*/}
            {calendar && 
             <div ref={cardRef}>

             <div className='CalendarChekout'>
                 <div className='CalendarChekout_'>
                     <div className='CalendarChekout_date' style={{ border: '1px solid #004274' }}>
                         <div className='CalendarChekout_date_'>
                             <div>
                                 <h2>Fecha de nacimiento</h2>
                                 <p>{dateOneWay.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</p>
                             </div>
                         <div>
                         <Calendar size="20" color="#004274" variant="Bold"/>
                         </div>
                         </div>
                     </div>
                      
                 </div>
                     <div className='dateRangeOnly'>
                         <CalendarNew
                         minDate={date} 
                         maxDate={dateMax}  
                         editableDateInputs={true} 
                         months={2} 
                         direction="horizontal" 
                         onChange={onChangeOnlyDate} 
                         date={dateOneWay} />
                     </div>
             </div>
            
         </div>}

{/* 
*
*------------END ------------------
*
*/}
           </div>
        </div>
    </div>
    </React.Fragment>
  );
}

export default Infant