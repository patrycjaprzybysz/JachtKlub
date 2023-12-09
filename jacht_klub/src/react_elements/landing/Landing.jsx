import React, { useEffect, useRef, useState } from 'react';
import HeaderLanding from './HeaderLanding';
import LandingNews from './LandingNews';
import LandingAbout from './LandingAbout';
import Crew from './Crew';
import Regaty from './Regaty';
import Galeria from './Galeria';
import Kontakt from './Contact';
import morze from '../../assets/media/firefly2.png';
import SecondHeader from './SecondHeader';

export default function BackgroundLanding() {
  const [isHeaderLandingVisible, setHeaderLandingVisible] = useState(true);
  const landingPhotoRef = useRef(null);
  const secondHeaderRef = useRef(null);

  const updateVisibility = () => {
    const screenWidth = window.innerWidth;
    const isSmallScreen = screenWidth < 770;

    setHeaderLandingVisible(!isSmallScreen);
  };

  const mainContainerStyle = {
    backgroundImage: `url(${morze})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '200vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  };

  const headerLandingStyles = {
    transition: 'opacity 0.3s ease-in-out',
    opacity: isHeaderLandingVisible ? 1 : 0,
  };

  useEffect(() => {
    const landingPhotoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderLandingVisible(true);
          } else {
            setHeaderLandingVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    landingPhotoObserver.observe(landingPhotoRef.current);

    // Initial check
    updateVisibility();

    // Event listener for window resize
    window.addEventListener('resize', updateVisibility);

    return () => {
      landingPhotoObserver.disconnect();
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  return (
    <>
      {/* Conditional rendering for HeaderLanding or SecondHeader based on screen width */}
      <div style={headerLandingStyles}>
        {isHeaderLandingVisible && <HeaderLanding />}
      </div>
      {!isHeaderLandingVisible && <SecondHeader ref={secondHeaderRef} />}

      <div
        ref={landingPhotoRef}
        className="landingPhoto w-full h-screen bg-background bg-cover bg-center relative mb-0 mt-0"
      >
        <div className="landing-title absolute top-1/2 left-1/2 font-josefinsans text-text animate__animated animate__slideInLeft">
          <h1 className=" landing-title font-jaldi">Jacht Klub <br /> Królewskiego Miasta Darłowo</h1>
        </div>
      </div>

      <LandingAbout />
      <Crew />
      <LandingNews />
      <div className='mt-20'>
      <Galeria />
      </div>
      <div style={{...mainContainerStyle, height: isHeaderLandingVisible ? '200vh' : 'auto'}}>
        <Regaty />
        <Kontakt />
      </div>
    </>
  );
}
