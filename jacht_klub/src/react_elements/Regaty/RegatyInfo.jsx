import React from 'react';
import Header from '../general/Header';
import background from '../../assets/media/niebo.jpg';
import InputComponent from './Input';
import SecondHeader from '../landing/SecondHeader';
import mapka from '../../assets/media/mapka.jpg'

export default function RegatyInfo() {
  return (
    <>
      <SecondHeader/>
      <div className="flex flex-col md:flex-row lg:flex-row"style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: "cover", 
        height: "auto", 
        display: "flex", 
        flexDirection: "column", 
        position: "relative",
      }}>
        <div style={{  
          display: "flex", 
          justifyContent: "center", 
          margin: "auto", 
          marginTop: "3%", 
          marginBottom: "3%" 
        }}>
          <div style={{  
            width: "500px", 
            height: "1300px", 
            background: "white", 
            border: "10px solid transparent", 
            borderRight:"none",
            backgroundClip: "padding-box",
            borderImage: `linear-gradient(to bottom, #30415D, #566B8C) 1`, 
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)", 
            position: "relative", 
            zIndex: 1,
            marginTop: "5%"
          }}>
            <div>
              <h1 style={{textAlign:'center', color:"#E5CE00", fontSize:"36px", marginTop:"5%", fontFamily:"jaldi"}}>Regaty 2024</h1>
              <h2 style={{textAlign:'center', fontSize:"14px", color:'grey',fontFamily:"jaldi"}}>
                Wypełnij poniższy formularz, aby zapisać<br />
                swoją załogę do uczestnictwa w regatach 2024
              </h2>
              <div style={{marginLeft:"10%", marginRight:"10%", marginTop:"8%"}}>
                {/* <p>rodzaj wyścigu</p>
                <label>
                  <input id="w1" type="checkbox" />
                  Wyścig I (Ustka - Darłowo 09.09.2023r.)
                </label>
                <label>
                  <input id="w2" type="checkbox" />
                  Wyścig II (Darłowo na redzie 10.09.2023r.)
                </label> */}
              <div
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  borderRadius: "8px",
                  margin: "10px 0",
                  marginBottom:"20px"
                }}
              >
                <p className='font-jaldi text-2xl font-bold mb-6 text-yellow text-center'>Informacje o jachcie</p>
                <InputComponent 
                  id="nazwa"
                  placeholder='input__field'
                  label="Nazwa"
                  customClass="input__field-margin"
                />
                <InputComponent 
                  id="typ"
                  placeholder='input__field'
                  label="Typ"
                  customClass="input__field-margin"
                />
                <InputComponent 
                  id="oznaczenie"
                  placeholder='input__field'
                  label="oznaczenie na żaglu"
                  customClass="input__field-margin"
                />
                <InputComponent 
                  id="dlugosc"
                  placeholder='input__field'
                  label="Długość całkowita jachtu L (m): "
                  customClass="input__field-margin"
                />
                </div>
                <div
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  borderRadius: "8px",
                  margin: "10px 0",
                  marginBottom:"20px"
                }}
              >
                <p className='font-jaldi text-2xl font-bold mb-6 text-yellow text-center'>Informacje o załodze</p>
                <InputComponent 
                  id="sternik"
                  placeholder='input__field'
                  label="Sternik Jachtu"
                  customClass="input__field-margin"
                />
                <InputComponent 
                  id="stopien"
                  placeholder='input__field'
                  label="stopień"
                  customClass="input__field-margin"
                />
                 <InputComponent 
                  id="rok"
                  placeholder='input__field'
                  label="rok urodzenia"
                  customClass="input__field-margin"
                />
                <InputComponent 
                  id="adres"
                  placeholder='input__field'
                  label="Adres zamieszkania"
                  customClass="input__field-margin"
                />
                 <InputComponent 
                  id="nr"
                  placeholder='input__field'
                  label="numer telefonu"
                  customClass="input__field-margin"
                />
               
                <InputComponent 
                  id="klub"
                  placeholder='input__field'
                  label="Klub"
                  customClass="input__field-margin"
                />
                <InputComponent 
                  id="załoga"
                  placeholder='input__field'
                  label="załoga"
                  customClass="input__field-margin"
                />
                </div>
{/* 
                <label>
    <input id="akceptacja" type="checkbox" />
    Akceptuje regulamin
  </label> */}
 
 <a 
  href=""
  className="font-jaldi text-white bg-text hover:bg-yellow-500 focus:bg-yellow-500 focus:outline-none rounded-lg py-2 px-4 lg:text-lg xl:text-xl 2xl:text-2xl transition duration-300 "
  style={{ width: "200px" }}
>
  Wyślij zgłoszenie
</a>



              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row lg:flex-row' style={{  
            width: "500px", 
            height: "1300px", 
            background: "white", 
            border: "10px solid transparent", 
            borderLeft:"none",
            backgroundClip: "padding-box",
            borderImage: `linear-gradient(to bottom, #30415D, #566B8C) 1`, 
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
            position: "relative", 
            zIndex: 1,
            marginTop:"5%"
          }}>
            
            <div>
              <img src={mapka}/>
              {/* zmienic ja */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//poprawic to czcionka rozmieszczenie dodac mapke