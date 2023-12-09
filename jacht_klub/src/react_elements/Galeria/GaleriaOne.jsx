import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import Header from '../general/Header';
import regaty2023 from '../../assets/media/trzyperły.jpeg';
import SecondHeader from '../landing/SecondHeader';


function GaleriaOne() {
   let photo = regaty2023
   let title ="Regaty 2023"
   let opis="fotorelacja z regat 2023"
  let date ="13 czerwca 2023"
  return (
    <div>
      <SecondHeader/>

      <div className='flex flex-col justify-center items-center '>
        <h1 className='text-text text-5xl mt-20 mb-5 font-bold font-jaldi'>{title}</h1>
        <p className='mb-1 text-xl font-jaldi'>{opis}</p>
        <p className='mb-10 text-xs font-jaldi'>{date}</p>
        <img src={photo} style={{ height: "200px", width: "400px" }} alt="Regaty 2023" />
      </div>

      {/* tutaj załadowane zdjęcia */}

      <div className='flex justify-between mt-5'>
  <button className='flex items-center text-grey2 font-jaldi'>
    <div className='mr-10'>
      <FaArrowLeft />
    </div>
    Poprzednia Galeria
  </button>
  <button className='flex items-center text-grey2 font-jaldi'>
    Następna Galeria
    <div className='ml-10'>
      <FaArrowRight />
    </div>
  </button>
</div>
</div>
  );
}

export default GaleriaOne;


//po nacisnieciu na głownej na obszar ze zdjeciem czy tam tytułem albumu przenosi do galerii 
// tak ma to wyglądac https://ossowscy.com/paulina-i-dawid-minimalistyczna-sesja-ciazowa-studio-luks-sfera/