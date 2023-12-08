import React from 'react';
import regaty2023 from '../../assets/media/trzyperły.jpeg';
import TileGallery from './TileGallery';

function Galeria() {
 

  return (
    <div id="galeria">
       <h1 className="md:text-lg lg:text-3xl sm:text-base 2xl:text-6xl font-josefinsans text-text  font-bold ml-5 mt-10 mb-10 relative">
  Galeria
  </h1>
      <div className="overflow-x-auto overflow-y-hidden flex items-center" >
      <div className="flex mt-50 mb-4">


      
<a href="../../src/html/galeria.html">
        <TileGallery
          title="REGATY 2023"
          imageSrc={regaty2023}
          altText="Waldemar Śmigielski"
          marginLeft="20px"
          marginRight="20px"
        />
</a>
<a href="../../src/html/galeria.html">
         <TileGallery
          title="REGATY 2022"
          textWithoutList="Wicekomandor Jacht Klubu"
          imageSrc={regaty2023}
          altText="Paweł Krakowiak"
          marginLeft="20px"
          marginRight="20px"
        />
</a>
<a href="../../src/html/galeria.html">       
        <TileGallery
          title="REGATY 2021"
          textWithoutList="Członek zarządu"
          imageSrc={regaty2023}
          altText="Grzegorz Hejno"
          marginLeft="20px"
          marginRight="20px"
        />
</a>
<a href="../../src/html/galeria.html">       
         <TileGallery
          title="REJS DOOKOŁA BAŁTYKU"
          textWithoutList="Członek zarządu"
          imageSrc={regaty2023}
          altText="Marcin Lewandowski"
          marginLeft="20px"
          marginRight="20px"
        />
</a>
        
       
      </div>
      </div>
      </div>
      
  );
}

export default Galeria;
