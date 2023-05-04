import { Record, RecordCircle } from 'iconsax-react'
import React from 'react'
import './Assets/styles.css'
import classnames from 'classnames';


const FlightsPassengerDetails = ({ cardRef, passengerContinue, handleNumber, adultNum, boyNum, babyNum, passengersSelecteds, clasSelected, economicClasFunction, ejecutiveClasFunction, businessClasFunction }) => {

  return (
    <div 
    className={
        classnames(
            {'passengerDetails':true ? true: true},
            {'passengerDetailsValidateOne':adultNum + boyNum +  babyNum > 9 || boyNum > adultNum * 2 || babyNum > adultNum  ? true: false},
            {'passengerDetailsValidateTwo': adultNum + boyNum +  babyNum > 9 && boyNum > adultNum * 2 && babyNum > adultNum ? true: false }
            )
        }

     ref={cardRef}>
        <div className='passengerDetails_container'>

            <h2>pasajeros</h2>

            {adultNum + boyNum +  babyNum > 9?
                <p className='alertPassengerDetails'>Puedes hacer reserva hasta un maximo de 9 pasajeros</p>
            :
                <div/>
            }

            {boyNum   > adultNum * 2 ?
                <p className='alertPassengerDetails'>Solo pueden viajar 2 menores de edad por cada adulto</p>
            :
                <div/>
            }
            {babyNum > adultNum ?
                <p className='alertPassengerDetails'>El numero de adultos debe ser igual al numero de bebes</p>
            :
                <div/>
            }
            
            <div className='passagersDetails_'>
                <div>
                    <p className='principalDetails_p'>Adultos</p>
                </div>
                <div className='passengerDetails_miniButtons'>
                    <button className='principalDetails_miniButtons' disabled={passengersSelecteds.adult <= 1} onClick={() => handleNumber("adult", "decrease")}><p>-</p></button>
                    <div className='passagersDetails_numButton'><p>{adultNum}</p></div>
                    <button className='principalDetails_miniButtons' onClick={() => handleNumber("adult", "increase")}><p>+</p></button>
                </div>
            </div>
            <div className='passagersDetails_'>
                <div>
                    <p className='principalDetails_p'>Niños</p>
                    <p className='sencondaryDetails_p'>2 a 11 años</p>
                </div>
                <div className='passengerDetails_miniButtons'>
                    <button className='principalDetails_miniButtons' disabled={passengersSelecteds.boy <= 0} onClick={() => handleNumber("boy", "decrease")}><p>-</p></button>
                    <div className='passagersDetails_numButton'><p>{boyNum}</p></div>
                    <button className='principalDetails_miniButtons' onClick={() => handleNumber("boy", "increase")}><p>+</p></button>
                </div>
            </div>
            <div className='passagersDetails_'>
                <div>
                    <p className='principalDetails_p'>Bebés</p>
                    <p className='sencondaryDetails_p'>0 a 23 meses</p>
                </div>
                <div className='passengerDetails_miniButtons'>
                    <button className='principalDetails_miniButtons' disabled={passengersSelecteds.baby <= 0} onClick={() => handleNumber("baby", "decrease")}><p>-</p></button>
                    <div className='passagersDetails_numButton'><p>{babyNum}</p></div>
                    <button className='principalDetails_miniButtons' onClick={() => handleNumber("baby", "increase")}><p>+</p></button>
                </div>
            </div>
           
            <div className='passengerDetails_button'>
                <button onClick={passengerContinue}>continuar</button>
            </div>
        </div>
    </div>
  )
}

export default FlightsPassengerDetails