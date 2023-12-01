import React from 'react'
import regaty2023 from '../../assets/media/trzyperły.jpeg'
//import { Link } from 'react-router-dom';

function Galeria() {
  return (
    <div className='w-full h-full'>
      <div className="flex justify-center items-center">
            <span style={{ borderBottom: "2px solid #E5CE00", flex: "1", margin: "20px 40px", marginTop:"40px" }}></span>
                    <h1 className="text-yellow text-center text-4xl font-bold mt-5">GALERIA</h1>
                    <span style={{ borderBottom: "2px solid #E5CE00", flex: "1", margin: "20px 40px", marginTop:"40px" }}></span>
                </div>
                
      <div className='w-full h-80 bg-grey'>
      <img src={regaty2023} style={{ width: "450px", height: "320px", marginTop:"20px", marginBottom:"5px" }}/>
      </div>
      
      <div className='w-full h-80 bg-white'>
      <img src={regaty2023} style={{ width: "450px", height: "320px"}}/>
      </div>
      <div className='w-full h-80 bg-grey'>
      <img src={regaty2023} style={{ width: "450px", height: "320px"}}/>
      </div>
      <div className='w-full h-80 bg-white'>
      <img src={regaty2023} style={{ width: "450px", height: "320px"}}/>
      </div>
    </div>
  )
}

export default Galeria
