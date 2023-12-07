import React from 'react';
import Header from '../general/Header';
import background from '../../assets/media/niebo.jpg';
import InputComponent from './Input';

export default function RegatyInfo() {
  return (
    <>
      <Header />
      <div style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: "cover", 
        height: "120vh", 
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
            height: "600px", 
            background: "white", 
            border: "10px solid transparent", 
            borderRight:"none",
            backgroundClip: "padding-box",
            borderImage: `linear-gradient(to bottom, #30415D, #566B8C) 1`, 
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)", 
            position: "relative", 
            zIndex: 1,
          }}>
            <div>
              <h1 style={{textAlign:'center', color:"#E5CE00", fontWeight:"bold", fontSize:"36px", marginTop:"5%"}}>Regaty 2024</h1>
              <h2 style={{textAlign:'center', fontSize:"14px", color:'grey'}}>
                Wypełnij poniższy formularz, aby zapisać<br />
                swój zespół do uczestnictwa w regatach 2024
              </h2>
              <div style={{marginLeft:"10%", marginRight:"10%", marginTop:"8%"}}>
                <InputComponent 
                  id="imie"
                  placeholder='input__field'
                  label="Imię i nazwisko"
                  customClass="input__field-margin"
                />
                <InputComponent 
                  id="nr"
                  placeholder='input__field'
                  label="Numer telefonu"
                  customClass="input__field-margin"
                />
              </div>
            </div>
          </div>

          <div style={{  
            width: "500px", 
            height: "600px", 
            background: "white", 
            border: "10px solid transparent", 
            borderLeft:"none",
            backgroundClip: "padding-box",
            borderImage: `linear-gradient(to bottom, #30415D, #566B8C) 1`, 
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
            position: "relative", 
            zIndex: 1,
          }}>
            
            <div>
              <h1>mapka</h1>
              {/* miejsce na mapę */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
