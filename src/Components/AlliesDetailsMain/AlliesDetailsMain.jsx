
import React from 'react'
import ColombiaMap from './Assets/Img/ColombiaMap.jpg'
import travelForm from './Assets/Img/travelForm.jpeg'
import Travel from './Assets/Img/Travel.jpg'
import { Button,TextField,Box } from '@mui/material'
import AlliesDetailMainCarrosel from '../AlliesDetailMainCarrosel/AlliesDetailMainCarrosel'
import AlliesDetailMainCarroselAirline from '../AlliesDetailMainCarroselAirline/AlliesDetailMainCarroselAirline'
import { useForm } from "react-hook-form";

import './Assets/styles.css'
const AlliesDetailsMain = () => {

    const {register, errors, handleSubmit} = useForm();

const onSubmit =(data)=>{
    console.log(data)
}

  return (
   
    
    <div   className='procedureCategoryDetailsMainn'>
        <div className='procedureCategoryDetailsMain_one' id='scrollOne'>
            <div className='procedureCategoryDetailsMain-one_text'>
                <div className='containedClinics'>
                  <div>
                        <div className='tittleClinics'>
                            <div>
                            <h2>+20 CLÍNICAS</h2>
                            </div>

                        </div>
                        <div className='subTitleClinics'>
                            <label>
                            Aliadas en todo el país
                            </label>
                       </div>
                        
                  </div>
                        <div className='paragraph'>
                        <p >
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'content here,
                         content here', making it look like readable English. Many desktop punlishing packages and web page edit).
                        </p>
                        </div>
                        
                    
                </div>
            </div>
            <div className='procedureCategoryDetailsMain-one_img mapWellezy'>
                <img src={ColombiaMap} alt="colombiaMap" />
            </div>
        </div>
         <AlliesDetailMainCarrosel/>    
        <div className='procedureCategoryDetailsMain_one' id='scrollOne'>
            

        <div className='procedureCatergoryDetailsHeader_img'>
            <div className='procedureCatergoryDetailsHeader-img_background'/>
            <img src={Travel} alt="bichectomia" />    
        </div>
            <div className='procedureCatergoryDetailsHeader_text'>
                <div className='contentInfoTravel'>
                    <label>ESTAMOS ALIADOS CON</label>
                    <h1>+30 EMPRESAS DE VIAJE</h1>
                    <label>EN TODO EL MUNDO</label>
                    <p>EXPLORA EL MUNDO CON WELLEZY</p>
                </div>
            </div>
        </div>
        
            <AlliesDetailMainCarroselAirline/>
           
        
            <div className='formAddAllies' id='scrollOne'>
            
            <div className='formAddAllies-img'>
                <img className='travelForm' src={travelForm} alt="travelForm" />
            </div>
            <Box  className='formAddAllies-form'>
                <div className='formAddAllies-form-container-position'>
                    <div>
                    <div className='formAddAllies-form-tittle-position'>
                        <div className='formAddAllies-form-tittle'>
                            <h2>¿Quieres ser uno de</h2>
                            <h2>nuestros aliados?</h2>
                        </div>
                    </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='formAddAllies-form-container'>
                                            <div className='formAddAllies-form-item' >
                                                    <label>
                                                        Nombre
                                                    </label>
                                                    <TextField
                                                    className='formAddAllies-form-items formAddAllies-form-textfields'
                                                    id="outlined-textarea"
                                                    placeholder="Placeholder "
                                                    />
                                            </div>
                                            <div className='formAddAllies-form-item'>
                                                    <label>
                                                    Apellido
                                                    </label>
                                                    <TextField
                                                    className='formAddAllies-form-items formAddAllies-form-textfields'
                                                    id="outlined-textarea"
                                                    placeholder="Placeholder "
                                                    />
                                            </div>
                                            <div className='formAddAllies-form-item'>
                                                    <label>
                                                    Email
                                                    </label>
                                                    <TextField
                                                    className='formAddAllies-form-items formAddAllies-form-textfields'
                                                    id="outlined-textarea"
                                                    placeholder="Placeholder "
                                                    />
                                            </div>
                                            <div className='formAddAllies-form-item '>
                                                    <label>
                                                    Mensaje
                                                    </label>
                                                    <TextField
                                                    className='formAddAllies-form-items formAddAllies-form-textfields'
                                                    id="outlined-multiline-static"
                                                    placeholder="Placeholder "
                                                    multiline
                                                    rows={4}
                                                    />
                                            </div>
                                            <div className='formAddAllies-form-item'>
                                            
                                            <Button className='formAddAllies-form-items formAddAllies-form-button' variant="outlined">Enviar</Button>
                                            </div>
                                    </div>
                            </form>
                    </div>

                    

                </div>
            </Box>
        </div>
    </div>
  )
}

export default AlliesDetailsMain