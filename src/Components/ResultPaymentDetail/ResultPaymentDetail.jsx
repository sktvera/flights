
import * as React from 'react';
/* import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation} from 'react-router'; */
import './Assets/styles.css'



/* const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  price: number,
  
) {
  return { name, price };
}

const rows = [
  createData('Valor total a pagar por adulto:', 159),
  createData('Valor total a pagar por niño:', 237),
  createData('valor total a pagar por infante:', 262),
  createData('valor total a pagar por todos:', 305),
  
];

function createDataTable(
  flight: string,
  airline: string,
  numberFlight: string,
  departureCity: string,
  destiny: string,
  departureTime: string,
  returnTime: string,
  services: string,
 
 
  
) {
  return { flight, airline, numberFlight, departureCity, destiny, departureTime, returnTime, services};
}

const detailFlightRows = [
  createDataTable('ida', 'airline','numero de vuelo', 'ciudad salida', 'destino','hora de salida', 'hora de regreso','servicios'),
  createDataTable('regreso', 'aerolinea','numero de vuelo', 'ciudad salida', 'destino','hora de salida', 'hora de regreso','servicios'),
 
  
]; */


function ResultPaymentDetail() {
  /*     const location = useLocation();
      console.log({location})

      const name = location.state.name */
   


  
  return (
    <div >
         {/*  <div className='containerResultPayment'>
              <div className=''>
                    <div className='paragraph'>
                        <h2>
                            Estimado señor {name}
                        </h2>
                    </div>
                    <div className='paragraph'>
                        <p>Teniendo en cuenta la compra realizada por medio de nuestros canales autorizados, a continuacion le compartimos toda la informacion detallada y valor pagado por los servicios.</p>
                    </div>   
                    <div className='paragraph'>
                        <p>tipo de servicio adquirido: vuelo</p>
                    </div>
                    <div className='paragraph'>
                        <p>Ciudad de salida:Medellin</p>
                        <p>Destino:Punta Cana</p>
                    </div>
                    <div className='paragraph'>
                        <p>Fecha de salida xxxx</p>
                        <p>Fecha de salida xxxx</p>
                    </div>
                    <div className='paragraph'>
                        <p>numero total de viajeros</p>
                    </div>
                    <p>su plan incluye:</p>
                   <div className='paragraphTableList'>
                   <div className='paragraphTable '>
                   
                        <ul>
                            <li>Tiquete aereo ida y regreso en la ruta Medellin - punta Cana Medellin operado por la aerolinea wingo.</li>
                            <li>Alojamiento en un hotel grand sirenis punta cana 4 noches, 5 dias</li>
                            <li>Alojamiento</li>
                            <li>Desayuno, almiuerzo y cena</li>
                            <li>Bebidas y licores en horarios establecidos por el hotel</li>
                            <li>snack en horario establecidos por el hotel</li>
                        </ul>
                    </div>
                   </div>
                   
                    <p>los valores a pagar por los servicios se detallan a continuacion:</p>

                    <TableContainer component={Paper}>
                        <Table className='tableContainer paragraphTable' aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>
                                      Tipo de pasajero 
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                      Valor
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                      {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                      {row.price}
                                    </StyledTableCell>
                                </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <p>los valores a pagar por los servicios se detallan a continuacion:</p>

                    <TableContainer component={Paper}>
                      <Table className=' paragraphTable' aria-label="customized table">
                          <TableHead>
                              <TableRow>
                                  <StyledTableCell>
                                    Trayecto
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    Aerolinea
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    # de vuelo
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    Ciudad de salida
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    Destino
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    Hora de salida
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    Hora de regreso
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    Servicios
                                  </StyledTableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {detailFlightRows.map((row) => (
                              <StyledTableRow key={row.flight}>
                                  <StyledTableCell component="th" scope="row">
                                    {row.flight}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    {row.airline}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    {row.numberFlight}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    {row.departureCity}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    {row.destiny}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    {row.departureTime}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    {row.returnTime}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    {row.services}
                                  </StyledTableCell>


                              </StyledTableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </TableContainer>
                <div className='paragraphTable'>
                    <p>su venta fue generada por medio de la sucursal medellin</p>
                    <p>el sesor que le atendio xx</p>
                    <p>numero de contacto xx</p>
                    <p>el correo electronico  xx</p>
                </div>
                  
<div className='law'>
<p>WELLEZY SAS se acoge a la key 679 de 2001 y ley 1336 de 2009 la explotacion y el abuso sexual de nino, ninas y adolecentes en el pais son sancionados penal y administrativamente, conforme a las leyes vigentes.</p>
</div>
                   
              </div>
          </div> */}
    </div>
   
  )
}

export default ResultPaymentDetail







//const ApiCountryFlags = 'https://countryflagsapi.com/png/'


 
