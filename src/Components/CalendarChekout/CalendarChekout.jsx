import React, { useState } from 'react'
import { Calendar } from 'iconsax-react';
import { Calendar as CalendarNew } from 'react-date-range';

import './Assets/styles.css'


const CalendarChekout = ({  setTittleDateOfBirth, cardRef}) => {

    const [dateOneWay, setDateOneWay] = useState(new Date())
    const onChangeOnlyDate = (item) => {
        setDateOneWay(item)
        setTittleDateOfBirth(item.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}))
    }

  return (
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
                    editableDateInputs={true} 
                    months={2} 
                    direction="horizontal" 
                    onChange={onChangeOnlyDate} 
                    date={dateOneWay} />
                </div>
        </div>
       
    </div>
  )
}

export default CalendarChekout
