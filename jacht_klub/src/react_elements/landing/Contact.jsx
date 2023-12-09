import React from 'react';
import darkwater from '../../assets/media/water.jpg';

function Contact() {
  return (
    <div id ="kontakt" className="contact-container flex flex-col md:flex-row justify-center text-center" style={{ marginTop: "1%" }}>
      <div  className="contact-section border-4 border-solid border-white bg-opacity-0 mb-8 md:mr-8 md:mb-0 md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 ml-16">
        <h1  className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" style={{ marginTop: "10%", color: "white" }}>Adres</h1>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "4%" }}>
          <b>Adres korespondencyjny:</b> Zakrzewo 7 <br />
          76-150 Darłowo
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "4%" }}>
          <b>Siedziba:</b> Kotwiczna 8, 76-153 Darłówko
        </p>
      </div>

      <div className="contact-section border-4 border-solid border-white bg-opacity-0 mb-8 md:mx-8 md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 ml-16">
        <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" style={{ marginTop: "10%", color: "white" }}>Kontakt</h1>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "4%" }}>
          <b>nr tel</b> 555 555 555
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "4%" }}>
          kontakt@jachtklubdarlowo.pl
        </p>
        {/*tutaj będzie jeszcze ikonka fb i email i połączenie */}
      </div>

      <div className="contact-section border-4 border-solid border-white bg-opacity-0 mb-8 md:ml-8 md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 ml-16">
        <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" style={{ marginTop: "10%", color: "white" }}>Dane płatnicze</h1>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "4%" }}>
          <b>Konto:</b> 89 8566 0003 0115 6708 5000 0001
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "4%" }}>
          <b>NIP:</b> 4990683766
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "4%" }}>
          <b>REGON:</b> 387067100
        </p>
      </div>
    </div>
  );
}

export default Contact;
