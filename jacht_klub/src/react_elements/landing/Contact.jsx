import React from 'react';
import darkwater from '../../assets/media/water.jpg';

function Contact() {
  return (
    <div id="kontakt" className="contact-container" style={{ marginTop: "10%" }}>
      <div className="contact-section md:border-4 lg:border-4 xl:border-4 2xl:border-4 border-solid border-white bg-opacity-0" style={{ marginLeft: "80px" }}>
        <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" style={{ marginTop: "20%", color: "white" }}>Adres</h1>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "6%" }}>
          <b>Adres korespondencyjny:</b> Zakrzewo 7 <br />
          76-150 Darłowo
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "6%" }}>
          <b>Siedziba:</b> Kotwiczna 8, 76-153 Darłówko
        </p>
      </div>

      <div className="contact-section md:border-4 lg:border-4 xl:border-4 2xl:border-4 border-solid border-white bg-opacity-0">
        <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" style={{ marginTop: "20%", color: "white" }}>Kontakt</h1>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "6%" }}>
          <b>nr tel</b> 555 555 555
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "6%" }}>
          kontakt@jachtklubdarlowo.pl
        </p>
        {/*tutaj będzie jeszcze ikonka fb i email i połączenie */}
      </div>

      <div className="contact-section md:border-4 lg:border-4 xl:border-4 2xl:border-4 border-solid border-white bg-opacity-0">
        <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" style={{ marginTop: "20%", color: "white" }}>Dane płatnicze</h1>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "6%" }}>
          <b>Konto:</b> 89 8566 0003 0115 6708 5000 0001
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "6%" }}>
          <b>NIP:</b> 4990683766
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: "white", marginTop: "6%" }}>
          <b>REGON:</b> 387067100
        </p>
      </div>
    </div>
  );
}

export default Contact;
