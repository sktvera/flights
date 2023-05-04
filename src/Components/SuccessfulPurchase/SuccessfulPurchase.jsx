import React, { useState } from 'react'

import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom'
import{Box, Button} from '@material-ui/core'
import aprobado  from './Assets/Img/aprobado.png'
import wellezy from './Assets/Img/wellezy.png'


import './Assets/styles.css'

const SuccessfulPurchase = ({reservation}) => {

    const navigate = useNavigate()
    
    const [openScales, setOpenScales] = React.useState(false);

    const handleScaleClose = () => {
    setOpenScales(false);
    navigate(`/`)
    }
    const handleScaleOpen=()=>{
    setOpenScales(true)
    }




    return (
            <div className='flight-going-airline'>
               

<Button
            className='buttonPaymentCard'
            type='submit' 
            variant="contained" 
            disableElevation
            onClick={handleScaleOpen}
            >
            Comprar
            </Button>


            {openScales ?
            <div>
                    <Modal
                    open={handleScaleOpen}
                    onClose={handleScaleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                            <Box className='modalPurchase'>
                                    <div>
                                            <div className='purchaseSummary'>
                                                    <div className='itemSucces'>
                                                            <div>
                                                                    <div className='succes'>
                                                                            <img src={aprobado} alt={'aprobado'} />
                                                                    </div>
                                                                    
                                                            </div>
                                                    </div>
                                                    <div className='itemSucces tittleSucces'>
                                                                    <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '16px', textTransform: 'capitalize' }}>La transcaccion fue realizada exitosamente</p>
                                                                    </div>
                                                    <div className='itemSucces codeReserve'>
                                                            <div className='itemsCodeReserve'>
                                                            <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '16px', textTransform: 'capitalize' }}>Este es tu coidgo de reserva</p>
                                                            <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '25px', textTransform: 'capitalize' }}>{reservation}</p>
                                                            </div>
                                                    </div>
                                                    <div className='itemSucces'>
                                                           <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '16px', textTransform: 'capitalize' }}> ¡gracias por tu compra!</p>
                                                    </div>
                                                    <div className='itemSucces footerSucces'>
                                                            <div className='wellezySucces'>
                                                            <img src={wellezy} alt={'wellezy'} />
                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                            </Box>
                    </Modal>
            </div>
            :
            <div/>
            }
                
            </div>
      )
 }

 export default SuccessfulPurchase