import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import Header from '../general/Header';
import regaty2023 from '../../assets/media/trzyperły.jpeg';

function GaleriaOne() {
  return (
    <div>
      <Header/>

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-text text-5xl mt-20 mb-5 font-bold'>Regaty 2023</h1>
        <p className='mb-1 text-xl'>fotorelacja z regat 2023</p>
        <p className='mb-10 text-xs'>13 czerwca 2023</p>
        <img src={regaty2023} style={{ height: "200px", width: "400px" }} alt="Regaty 2023" />
      </div>

      {/* tutaj załadowane zdjęcia */}

      <div className='flex justify-between mt-5'>
  <button className='flex items-center text-grey2'>
    <div className='mr-10'>
      <FaArrowLeft />
    </div>
    Poprzednia Galeria
  </button>
  <button className='flex items-center text-grey2'>
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