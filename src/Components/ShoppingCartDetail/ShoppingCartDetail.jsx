import React from 'react'
import { Button, TextField} from '@material-ui/core'


import './Assets/styles.css'
const ShoppingCartDetail = () => {
  return (
       <div className='contained'>
                <div className='containerShoppingCartDetail'>
                        <div className='containerShoppingCartDetail_ shoppingCartItems'>
                               <div className='tittleShoppingCardBody'>
                                        <h3>carritos de compras</h3>
                               </div>
                                <div>
                                        <div className='elementsShopping'>
                                               <div className='bodyElementsShopping'>
                                                        <div><p>ss</p></div>
                                                        <div>
                                                                <h4>Procedimiento</h4>
                                                                <p>Cirugía de senos - mamaria, Mastopexia,Dr Daniel Correa, Medellín</p>
                                                        </div>
                                                        <div>
                                                              <div></div>
                                                              <div></div>
                                                              <div></div>
                                                        </div>
                                               </div>
                                               <div className='line'/>
                                        </div>
                                        <div className='elementsShopping'>
                                               <div className='bodyElementsShopping'>
                                                        <div><p>ss</p></div>
                                                        <div>
                                                                <h4>Valoración</h4>
                                                                <p>Cita de Valoración Virtual,Viernes 1 Julio 2022</p>
                                                        </div>
                                                        <div><p>rgvrvr</p></div>
                                               </div>
                                               <div className='line'/>
                                        </div>
                                        <div className='elementsShopping'>
                                               <div className='bodyElementsShopping'>
                                                        <div><p>ss</p></div>
                                                        <div>
                                                                <h4>Proceso de Reuperación</h4>
                                                                <p>Casa de recuperacion, Laureles,Laureles Campestre, Medellín</p>
                                                        </div>
                                                        <div><p>rgvrvr</p></div>
                                               </div>
                                               <div className='line'/>
                                        </div>
                                        <div className='elementsShopping'>
                                               <div className='bodyElementsShopping'>
                                                        <div><p>ss</p></div>
                                                        <div>
                                                                <h4>Enfermera</h4>
                                                                <p>Ana Marín,Medellín</p>
                                                        </div>
                                                        <div><p>rgvrvr</p></div>
                                               </div>
                                               <div className='line'/>
                                        </div>
                                        <div className='elementsShopping'>
                                               <div className='bodyElementsShopping'>
                                                        <div><p>ss</p></div>
                                                        <div>
                                                                <h4>Plan Nutricional</h4>
                                                                <p>Nutrición Personalizada,Post Operación, Un Mes</p>
                                                        </div>
                                                        <div><p>rgvrvr</p></div>
                                               </div>
                                               <div className='line'/>
                                        </div>
                                        <div className='elementsShopping'>
                                               <div className='bodyElementsShopping'>
                                                        <div><p>ss</p></div>
                                                        <div>
                                                                <h4>Transporte</h4>
                                                                <p>Marta Toro, Ford Fiesta,Medellín</p>
                                                        </div>
                                                        <div><p>rgvrvr</p></div>
                                               </div>
                                               <div className='line'/>
                                        </div>
                                        <div className='elementsShopping'>
                                               <div className='bodyElementsShopping'>
                                                        <div><p>ss</p></div>
                                                        <div>
                                                                <h4>Sim Card</h4>
                                                                <p>Movil Exito,Plan de un mes de servicio</p>
                                                        </div>
                                                        <div><p>rgvrvr</p></div>
                                               </div>
                                               <div className='line'/>
                                        </div>
                                        <div className='elementsShopping'>
                                               <div className='bodyElementsShopping'>
                                                        <div><p>ss</p></div>
                                                        <div>
                                                                <h4>Tour</h4>
                                                                <p>Islas de San Andrés, San Andrés,Cuatro días - Tres noches</p>
                                                        </div>
                                                        <div><p>rgvrvr</p></div>
                                               </div>
                                               <div className='line'/>
                                        </div>
                                        <div className='elementsShopping'>
                                               <div className='bodyElementsShopping'>
                                                        <div><p>ss</p></div>
                                                        <div>
                                                                <h4>Vuelos</h4>
                                                                <p>San Juan, Puerto Rico - Rio Negro,Colombia, Económico</p>
                                                        </div>
                                                        <div><p>rgvrvr</p></div>
                                               </div>
                                               <div className='line'/>
                                        </div>
                                </div>
                               
                        </div>
                        <div className='containerShoppingCartDetail_'>
                               <div className='Cart'>
                                        <div className='cartDetailFooter'>
                                                <div className='tittleCardDetailFooter'>
                                                        <h3>Metodos De Pago</h3>
                                                </div>
                                                <div>
                                                        <div></div>
                                                        <div></div>
                                                        <div className='cardDesing'>
                                                               <div></div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='CartBody'>
                                                <div className='CartBodyForm'>
                                                        <TextField id="standard-basic" label="Nombre En Tarjeta" variant="standard" />
                                                </div>
                                                <div className='CartBodyForm'>
                                                        <TextField id="standard-basic" label="XXX XXXX XXXX XXXX" variant="standard" />
                                                </div>
                                                <div className='contained-CartBodyFormPayment'>
                                                        <div className='CartBodyFormPayment'>
                                                                <TextField className='paymentCartInput' id="standard-basic" label="mm" variant="standard" />
                                                                <TextField className='paymentCartInput' id="standard-basic" label="aa" variant="standard" />
                                                                <div className='paymentCartInput'></div>
                                                                <TextField className='paymentCartInput' id="standard-basic" label="xxx" variant="standard" />
                                                        </div>
                                                </div>
                                                
                                                <div className='buttonPaymentCard'>
                                                        <Button variant="contained">PAGAR</Button>
                                                </div>
                                        </div>
                               </div>
                        </div>
                </div>
       </div>
  )
}

export default ShoppingCartDetail
