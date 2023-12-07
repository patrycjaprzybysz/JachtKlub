import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import Header from '../general/Header';
import regaty2023 from '../../assets/media/trzyperły.jpeg';

function Article() {
  return (
    <div>
      <Header/>

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-text text-5xl mt-20 mb-5 font-bold'>Regaty 2023</h1>
        <p className='mb-10 text-xs'>13 czerwca 2023</p>
        <img src={regaty2023} style={{ height: "200px", width: "400px", marginBottom:"60px"}} alt="Regaty 2023" />
        <p className='text-justify ml-60 mr-60'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis, natus facere id ullam voluptatum maxime provident eos fugiat et! Iste dolores temporibus qui illum quia eveniet nihil! Vero, voluptas.
        </p>
      </div>

      {/* tutaj załadowane zdjęcia */}

      <div className='flex justify-between mt-5'>
  <button className='flex items-center text-grey2'>
    <div className='mr-10'>
      <FaArrowLeft />
    </div>
    Poprzedni Artykuł
  </button>
  <button className='flex items-center text-grey2'>
    Następny Artykuł
    <div className='ml-10'>
      <FaArrowRight />
    </div>
  </button>
</div>
</div>
  );
}

export default Article;


