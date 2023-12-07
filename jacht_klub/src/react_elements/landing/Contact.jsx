import React from 'react';
import darkwater from '../../assets/media/water.jpg';


function Contact() {
  return (
    <div id="kontakt" className="contact-container" style={{marginTop:"10%"}}>
        <div className="contact-section" style={{marginLeft:"80px"}}>
          <h1 style={{fontSize:"25px", marginTop:"20%", color:"white"}}>Adres</h1>
         <p style={{color:"white", fontSize:"14px",marginTop:"6%"}}><b>Adres korespondencyjny:</b> Zakrzewo 7 <br/>
         76-150 Darłowo</p>
         <p style={{color:"white", fontSize:"14px",marginTop:"6%"}}><b>Siedziba:</b> Kotwiczna 8, 76-153 Darłówko</p>
        </div>

        <div className="contact-section">
          <h1 style={{fontSize:"25px", marginTop:"20%", color:"white"}}>Kontakt</h1>
          <p style={{color:"white", fontSize:"14px",marginTop:"6%"}}><b>nr tel</b> 555 555 555</p>
          <p style={{color:"white", fontSize:"14px",marginTop:"6%"}}>kontakt@jachtklubdarlowo.pl</p>
{/*tutaj bedzie jeszcze ikonka fb i email i połaczenie */}
        </div>

        <div className="contact-section">
          <h1 style={{fontSize:"25px", marginTop:"20%", color:"white"}}>Dane płatnicze</h1>
         <p style={{color:"white", fontSize:"14px",marginTop:"6%"}}><b>Konto:</b> 89 8566 0003 0115 6708 5000 0001</p>
         <p style={{color:"white", fontSize:"14px",marginTop:"6%"}}><b>NIP:</b> 4990683766</p>
         <p style={{color:"white", fontSize:"14px",marginTop:"6%"}}><b>REGON:</b> 387067100</p>
        </div>
    </div>
  );
}

export default Contact;
