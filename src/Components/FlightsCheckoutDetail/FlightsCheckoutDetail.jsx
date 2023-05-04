import React from 'react'
import{Box, Grid, Hidden} from '@material-ui/core'

import './Assets/styles.css'

const FlightsCheckoutDetail = () => {
  return (

      //FlightsCheckoutDetail

<div className='flightsCheckoutDetail'>     
<Hidden only={['xs','sm','md']}>
    <Grid className='purchaseDetail' item xs={12}>
        <Box border={2} className='purchaseDetailItem'>
                    <label>vuelos para 3 personas</label>
                    <label>$ 822.800</label>
        </Box>
        <Box border={2} className='purchaseDetailItem'>
                    <label>impuestos y tasas</label> 
                    <label>$ 112.740</label>
        </Box>
        <Box>
                    <div className='line' style={{ width: '100%', height: '1.5px', backgroundColor: 'rgba(0, 66, 116, .2)', margin: '30px 0', borderRadius: '20px' }} />
        </Box>
        <Box border={2} className='purchaseDetailItem'>
                    <label className='result'>TOTAL</label>
                    <label className='result1'>$935.540</label>
        </Box>
    </Grid>     
    <Grid className='descriptionCash' item xs={12}>
        <Box>
                <h3>Cargos adicionales</h3>
                <label>Te los cobrara el alojamiento cuando llegues a destino</label>
        </Box>
        <Box>
                <h3> 
                Exencion IVA
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 9v5M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12v-.01Z" stroke="#000000 " stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.995 17h.009" stroke="#000000 " stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </h3>
                <label>si la fecha de tu Check-out es anterior al 31/12/2022, estaras exento del pago del IVA al alojamiento</label>
        </Box>
    </Grid>
    <div className='payDetail'  >
          <div className='payDetailLocationHeader'>
                <div className='payDetailLocationHeaderTitle' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M2 22h20" stroke="#403D3D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.95 22 3 9.97c0-.61.29-1.19.77-1.57l7-5.45a2.01 2.01 0 0 1 2.46 0l7 5.44c.49.38.77.96.77 1.58V22" stroke="#2D2B2B " stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5ZM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1Z" stroke="#2D2B2B " stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="m19 7-.03-3h-4.4" stroke="#2D2B2B " stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <h3>Boquilla Suites By GH Suites</h3>
                        <label className='payDetailLocationHeaderOption'>puedes cancelar hast el 18/09/2022 a la 14:00</label>
                </div>
                <div>
                        <label className='adress'>carrera 9 N° 38-76</label>
                </div>
                <div>
                        <label className='payDetailMap'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z" stroke="#791DE6 " stroke-width="1.5"></path><path d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z" stroke="#791DE6 " stroke-width="1.5"></path></svg>
                         Ver mapa
                        </label>
                </div>
                <div className='payDetailCheInOn'>
                        <div>
                                <label> Check in</label>
                                <h3>19 sep2022</h3>
                                <label>14:00 h</label>
                        </div>
                        <div>
                                <label> Check in</label>
                                <h3>19 sep2022</h3>
                                <label>14:00 h</label>
                        </div>
                </div>
          </div>
          <div className='payDetailModify' >
                <div className='line' style={{ width: '100%', height: '1.5px', backgroundColor: 'rgba(0, 66, 116, .2)', margin: '30px 0', borderRadius: '20px' }} />
                <div>
                        <p>5 noches, 2 adultos 1 menor</p>
                        <p>Habitacion Cuadruple Estandar</p>
                        <h3 className='breakfast'> desayuno americano</h3>
                </div>
                <div className='payDetailCondition'>
                    <h3> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 9v5M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12v-.01Z" stroke="#FFFFFF " stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.995 17h.009" stroke="#FFFFFF " stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            ver politica de cambios y cancelaciones
                    </h3>
                    <h3 className='condition'>Ver condiciones</h3>
                </div>
        </div>
    </div>
</Hidden>

</div>
  )
}

export default FlightsCheckoutDetail