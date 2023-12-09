import React from 'react';
import darkwater from '../../assets/media/water.jpg';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div id ="kontakt" className="contact-container flex flex-col md:flex-row justify-center text-center" style={{ marginTop: "1%" }}>
      <div  className=" contact-section border-4 border-solid border-white bg-opacity-0 mb-8 md:mr-8 md:mb-0 md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 ml-16">
        <h1  className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-jaldi font-bold text-white" style={{ marginTop: "10%" }}>Adres</h1>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-jaldi" style={{ color: "white", marginTop: "4%" }}>
          Adres korespondencyjny:<br /> Zakrzewo 7 
          76-150 Darłowo
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-jaldi" style={{ color: "white", marginTop: "4%" }}>
          Siedziba: <br /> Kotwiczna 8, 76-153 Darłówko
        </p>
      </div>

      <div className="contact-section border-4 border-solid border-white bg-opacity-0 mb-8 md:mx-8 md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 ml-16">
        <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-jaldi font-bold" style={{ marginTop: "10%", color: "white" }}>Kontakt</h1>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-jaldi" style={{ color: "white", marginTop: "4%" }}>
          nr tel  555 555 555
        </p>
         <a href="mailto:kontakt@jachtklubdarlowo.pl" className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-jaldi" style={{ color: "white", marginTop: "4%" }}>
          kontakt@jachtklubdarlowo.pl
        </a>
        <div style={{ marginTop: "5%", marginLeft: "40%", display: "flex", alignItems: "center" }}>
  <a href="https://www.facebook.com/profile.php?id=100064082860993" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
    <FaFacebook style={{ marginRight: "8px", fontSize: "20px" }} />
  </a>

  <a href="mailto:kontakt@jachtklubdarlowo.pl" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
    <FaEnvelope style={{ marginRight: "8px", fontSize: "20px" }} />
  </a>
</div>

       
      </div>

      <div className="contact-section border-4 border-solid border-white bg-opacity-0 mb-8 md:ml-8 md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 ml-16">
        <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-jaldi font-bold" style={{ marginTop: "10%", color: "white" }}>Dane płatnicze</h1>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-jaldi" style={{ color: "white", marginTop: "4%" }}>
          Konto: 89 8566 0003 0115 6708 5000 0001
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-jaldi" style={{ color: "white", marginTop: "4%" }}>
          NIP: 4990683766
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-jaldi" style={{ color: "white", marginTop: "4%" }}>
          REGON: 387067100
        </p>
      </div>
    </div>
  );
}

export default Contact;
