import React from 'react';
import Member from './Member';
import WS from '../../assets/media/WS.webp';
import PK from '../../assets/media/PK.webp';
import DM from '../../assets/media/DM.webp';
import GH from '../../assets/media/GH.webp';
import GT from '../../assets/media/GT.webp';
import ML from '../../assets/media/ML.webp';
import RB from '../../assets/media/RB.webp';

function Crew() {
  return (
    
    <div className="bg-navy w-full h-96 ">
      <h1 className="text-center font-bold text-3xl text-white">Członkowie zarządu</h1>
      <div className="overflow-x-auto overflow-y-hidden flex items-center" >
      <div className="flex mt-10">
        <Member
          title="Waldemar Śmigielski"
          textWithoutList="Komandor Jacht Klubu"
          imageSrc={WS}
          altText="Waldemar Śmigielski"
          marginLeft="20px"
          marginRight="20px"
        />
         <Member
          title="Paweł Krakowiak"
          textWithoutList="Wicekomandor Jacht Klubu"
          imageSrc={PK}
          altText="Paweł Krakowiak"
          marginLeft="20px"
          marginRight="20px"
        />
        
        <Member
          title="Grzegorz Hejno"
          textWithoutList="Członek zarządu"
          imageSrc={GH}
          altText="Grzegorz Hejno"
          marginLeft="20px"
          marginRight="20px"
        />
         <Member
          title="Marcin Lewandowski"
          textWithoutList="Członek zarządu"
          imageSrc={ML}
          altText="Marcin Lewandowski"
          marginLeft="20px"
          marginRight="20px"
        />
        <Member
          title="Robert Bukowski"
          textWithoutList="Sekretarz"
          imageSrc={RB}
          altText="Robert Bukowski"
          marginLeft="20px"
          marginRight="20px"
        />
        <Member
          title="Damian Miszke"
          textWithoutList="Członek zarządu"
          imageSrc={DM}
          altText="Damian Miszke"
          marginLeft="20px"
          marginRight="20px"
        />
        <Member
          title="Gerard Tocha"
          textWithoutList="Skarbnik"
          imageSrc={GT}
          altText="Gerard Tocha"
          marginLeft="20px"
          marginRight="20px"
        />
        {/* Dodaj więcej komponentów Member w miarę potrzeb */}
      </div>
    </div>
    </div>
  );
}

export default Crew;
