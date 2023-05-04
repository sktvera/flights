import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Adult from './Adult';
import Infant from './Infant';
import Contact from './Contact';
import Child from './Child';
import PaymentGateway from'../PaymentGateway/PaymentGateway'
import { useLocation} from 'react-router';
import { Box } from '@material-ui/core'
import Modal from '@mui/material/Modal';
import FlightChekoutModal from '../FlightChekoutModal/FlightChekoutModal'
import FlightChekoutMenuModal from '../FlightChekoutMenuModal/FlightChekoutMenuModal'
import classnames from 'classnames';

import './Assets/Chekout/styles.css'

const Checkout = () => {

    const location = useLocation();



    const dataCabin = location.state.dataCabin ?? []
    const dataComponents = location.state.dataComponents ?? []




    const [InformationFlight, setInformationFlight] = React.useState(false)

    const [dataAdults, setDataAdults ] = useState({})
    const [passengerAdultData, setPassengerAdultData ] = useState([])
    const [validateSendAdult, setValidateSendAdult ] = useState(false)
        /* console.log({passengerAdultData}) */
    const [dataInfants, setDataInfants ] = useState({})
    const [passengerInfantData, setPassengerInfantData ] = useState([])
    const [validateSendInfant, setValidateSendInfant ] = useState(false)
   /*  console.log({passengerInfantData}) */
    const [dataChilds, setDataChilds ] = useState({})
    const [passengerChildData, setPassengerChildData ] = useState([])
    const [validateSendChild, setValidateSendChild ] = useState(false)
    /* console.log({passengerChildData}) */
    const [dataContact, setDataContact ] = useState({})
    const [passengerContactData, setPassengerContactData ] = useState([])
    const [validateSendContact, setValidateSendContact ] = useState(false)
    /* console.log({passengerContactData}) */
    const FlightGoing = location.state.FlightSelectedGoing.segments
   /*  console.log({FlightGoing}) */
    const FlightReturn = location.state.FlightSelectedReturn.segments
    const oneWay = location.state.oneWay
    const roundTrip = location.state.roundTrip
    const passengersSelected = location.state.passengersSelected
    const totalPriceJson = location.state.totalPriceJson

    const recommendationInformationGoing = location.state.recommendationInformationGoing
    const recommendationInformationReturn = location.state.recommendationInformationReturn



    const goingBookingClass = recommendationInformationGoing.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.cabinProduct.length > 1 ? recommendationInformationGoing.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.cabinProduct[0].rbd : recommendationInformationGoing.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.cabinProduct.rbd
    const goingCompanyRecommendation = Array.isArray(recommendationInformationGoing.paxFareProduct[0].paxFareDetail.codeShareDetails) === true ? recommendationInformationGoing.paxFareProduct[0].paxFareDetail.codeShareDetails[0].company : recommendationInformationGoing.paxFareProduct[0].paxFareDetail.codeShareDetails.company;
    const goingfareType = recommendationInformationGoing.paxFareProduct[0].fareDetails[0].groupOfFares[0].productInformation.fareProductDetail.fareType



    const handleModalInformationFlight = ()=>{
        setInformationFlight(true)
        }
        const handleModalInformationFlightClose = ()=>{
            setInformationFlight(false)
        }
/*
* -----------DYNAMIC COMPONENTS --------
*/
    const arrayComponenets = [];
    const arrayTittle = [];
 /*
* -----------END--------
*/
/*
*-------------DYNAMIC FORMS-------------------- 
*/
    const dynamicForms = () =>{
    for(let i = 0; i < passengersSelected.adult; i ++ ){
    arrayTittle.push(`Adulto ${i + 1}`)
    arrayComponenets.push(<Adult 
                            dataAdults={dataAdults} 
                            setDataAdults={setDataAdults}
                            setValidateSendAdult={setValidateSendAdult}
                            validateSendAdult={validateSendAdult} 
                            keys={i} 
                            key={i}
                            />)
    }
    for(let i = 0; i < passengersSelected.baby; i ++ ){
    arrayTittle.push(`Infante ${i + 1}`)
    arrayComponenets.push(<Infant 
                            dataInfants={dataInfants} 
                            setDataInfants={setDataInfants}
                            setValidateSendInfant={setValidateSendInfant}
                            validateSendInfant={validateSendInfant} 
                            keys={i} 
                            key={i}
                            />)
    }
    for(let i = 0; i < passengersSelected.boy; i ++ ){
    arrayTittle.push(`Niño ${i + 1}`)
    arrayComponenets.push(<Child 
                            dataChilds={dataChilds} 
                            setDataChilds={setDataChilds}
                            setValidateSendChild={setValidateSendChild}
                            validateSendChild={validateSendChild} 
                            keys={i} 
                            key={i}
                            />)
    }
    arrayTittle.push(`Contacto`)
    arrayComponenets.push(<Contact 
                            dataContact={dataContact} 
                            setDataContact={setDataContact}
                            setValidateSendContact={setValidateSendContact}
                            validateSendContact={validateSendContact} 
                            />)
    }
    dynamicForms()
/*
*-------------END--------------
*/
/*
*-------------DYNAMIC TITTLE FORMS-------------------- 
*/
    const steps = arrayTittle;

    const getStepContent = (step) => {
    
    return arrayComponenets[step]
                                    }
    const theme = createTheme();
/*
*-------------END-------------------- 
*/

/*
*-------------VALIDATION NEXT FORMS AND SAVE FORMS-------------------- 
*/
const [activeStep, setActiveStep] = React.useState(0);

    const handleNext =  async () => {
    if(validateSendAdult === true){
        setPassengerAdultData([
            ...passengerAdultData,
        { ['userData']:dataAdults}
        ])
        setValidateSendAdult(false)
        setActiveStep(activeStep + 1);
    }
    if(validateSendInfant === true){
        setPassengerInfantData([
        ...passengerInfantData,
       { ['userData']:dataInfants}
        ])
        setValidateSendInfant(false)
        setActiveStep(activeStep + 1);
    }
       if(validateSendChild === true){
        setPassengerChildData([
            ...passengerChildData,
        { ['userData']:dataChilds}
        ])
        setValidateSendChild(false)
        setActiveStep(activeStep + 1);  
    }
    if(validateSendContact === true){
        setPassengerContactData([
        ...passengerContactData,
        { ['userData']:dataContact}
        ])
        setValidateSendContact(false)
        setActiveStep(activeStep + 1);
    }    
/*
*-------------END-------------------- 
*/    
    };
    const handleBack = () => {
    setActiveStep(activeStep - 1);
    setValidateSendAdult(false)
    setValidateSendInfant(false)
    setValidateSendChild(false)
    setValidateSendContact(false)
    };

console.log({passengerAdultData})
  return (
<ThemeProvider  theme={theme}>
    <CssBaseline />
    <div className='containerChekout_'>
        <div className='borderChekout'>
            <Container >
                <div className='tittleChekout'>
                    <h2>
                        Informacion pasajeros
                    </h2>
                </div>
                <div className='containerStep'>
                    <Stepper className={ classnames(
                                                    {'itemsSteps':arrayTittle.length > 5 ?true:false},
                                                    {'itemsStepsLittle':arrayTittle.length <= 5 ?true:false}
                                                    )} activeStep={activeStep} >
                        {steps.map((label) => (
                        <Step className='itemStepContent'  key={label}>
                            <StepLabel  className='borderChekoutStep'>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                </div>
                {activeStep === steps.length ? (
                <React.Fragment>
                {/* payment gateway button */}
                  <PaymentGateway
                  FlightReturn={FlightReturn}
                  FlightGoing={FlightGoing}
                  passengerAdultData={passengerAdultData}
                  passengerInfantData={passengerInfantData}
                  passengerChildData={passengerChildData}
                  passengerContactData={passengerContactData}
                  recommendationInformationGoing={recommendationInformationGoing}
                  recommendationInformationReturn={recommendationInformationReturn}
                  dataComponents={dataComponents}
                  dataCabin={dataCabin}
                  />
                </React.Fragment>
                ) : (
                <React.Fragment>
                {getStepContent(activeStep)}
                <div className='buttonsChekout'>
                    <Box>
                        {activeStep !== 0 && (
                        <Button 
                        style={{fontWeight: 600}} onClick={handleBack} >
                        Regresar
                        </Button>
                        )}
                        <Button 
                        className='nextButton'
                        variant="contained"
                        onClick={handleNext}
                        >
                        {activeStep === steps.length - 1 ? 'Reservar' : 'Siguiente'}
                        </Button>
                    </Box>
                </div>
                </React.Fragment>
                )}
            </Container>
        </div>
    </div>
{
/*
/*
/*
 -----------------------INFORMATION MODAL FLIGHT----------------------------  
/*
/*
*/
}
{InformationFlight ? 
    <div>
            <Modal
            open={handleModalInformationFlight}
            onClose={handleModalInformationFlightClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                    <Box>
                                <FlightChekoutModal
                                oneWay={oneWay}
                                roundTrip={roundTrip}
                                FlightGoing={FlightGoing}
                                FlightReturn={FlightReturn}
                                /> 
                    </Box>
             
            </Modal>
    </div>
:
<div/>
}

{
/*
/*
/*
 -----------------------FLIGHT INFORMATION MENU -----------------------
/*
/*
*/
}

<FlightChekoutMenuModal
oneWay={oneWay}
roundTrip={roundTrip}
InformationFlight={InformationFlight}
setInformationFlight={setInformationFlight}
handleModalInformationFlight={handleModalInformationFlight}
FlightGoing={FlightGoing}
FlightReturn={FlightReturn}
totalPriceJson={totalPriceJson}
passengersSelected={passengersSelected}
/>

</ThemeProvider>
);
}

export default Checkout