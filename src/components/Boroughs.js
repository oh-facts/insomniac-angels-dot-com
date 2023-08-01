import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/Boroughs.css';
import city1 from '../assets/boroughs/city1.png'
import madilyn from '../assets/boroughs/madilyn.png'
import holloway from '../assets/boroughs/holloway.gif'
import caroline from '../assets/boroughs/caroline.png'
import lower from '../assets/boroughs/lower.png'

const Boroughs = () => {
  const [currentProfile, setCurrentProfile] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const carouselRef = useRef(null);
  const slideWidth = useRef(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    slideWidth.current = carouselRef.current.offsetWidth;
    setIsLoaded(true);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    const sensitivity = 50;
    if (swipeDistance > sensitivity) {
      prevProfile();
    } else if (swipeDistance < -sensitivity) {
      nextProfile();
    }
  };

  const nextProfile = () => {
    setCurrentProfile((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const prevProfile = () => {
    setCurrentProfile((prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length);
  };

  const Profile = ({ image, name, description }) => {
    return (
      <div className="borough">
        <img src={image} alt='city' />
        <br />
        <b>{name}</b>
        <br />
        {description}
      </div>
    );
  };


  const profiles = [

    {
      name: "Midnight Anne-hatta",
      image: city1,
      description: "Flashy and expensive land of dreams, the sun never reaches this part of Anne-hatta. Nothing ever could make anyone want to leave this place. Mors tested this hypothesis using independent research. Only 5% of this place remains recognizable. \"This place died so hard, it went to heaven.\" - The BiWeekly",
      /*Midnight Enhatta, Anne-hatta, moon */
      /* Every ambitious young adult wishes they could move here because it is objectively the only way they could ever pursue their dreams.*/
    },
    {
      name: "Upper Madilyn",
      image: madilyn,
      description: "Gained popularity after Moon was deemed \"a bad idea\" by The BiWeekly. Overstimulating music and an excess of hipsters, Mors has been avoiding this area. This place is currently deemed, \"Not a bad idea\" by the BiWeekly.",

    },

    {
      name: "Miss Holloway",
      image: holloway,
      description: "The ring around the planet, where the angels come from. It is believed that heaven is situated someplace along it, and that when people die, they find themselves here, until a train picks them up and drops them someplace warm. The angels have neither denied nor accepted this claim. No one even remembers the origins of this rumor",

    },

    {
      name: "Caroline",
      image: caroline,
      description: "Nestled in gardens and parks, Mors had a hard time spotting and unpeopling people. Afraid that his average kills per second would drop, he took off to more populated city spaces. Our protagonist lives here.",
    },

    {
      name: "Lower Anne-hatta",
      image: lower,
      description: "",

    },


  ];
  const slideOffset = -currentProfile * slideWidth.current;
  const carouselStyle = isLoaded ? { transform: `translateX(${slideOffset}px)`, width: `${slideWidth.current * profiles.length}px` } : {};

  return (
    <div className="boroughs">
      <div
        className="carousel-container"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-content" style={carouselStyle}>
          {isLoaded &&
            profiles.map((profile, index) => (
              <Profile key={index} image={profile.image} name={profile.name} description={profile.description} />
            ))}
        </div>
      </div>
      <div className="carousel-button-container">
        <button className="carousel-button-prev" onClick={prevProfile} />
        <button className="carousel-button-next" onClick={nextProfile} />
      </div>
    </div>
  );
};

export default Boroughs;


/* 
  Rejected contendors (mainly due to scope)
  {
    name: "Fawns",
    image: city1,
    description: "Once riddled with crime, now sees a record breaking zero percent crime rates. Now its just a culturally rich borough full of parks. Mors loves spending his sundays here.",

  },
  {
    name: "Duchess",
    image: city1,
    description: "Easy to forget why you came here because of the general feel of unfamiliarity that echoes here. Squeezed next to each other are hundreds (source: BiWeekly) of different cultures each one block large, intersecting through everything and itself.",

  },
  {
    name: "Tensi",
    image: city1,
    description: "Even Mors said no. This place will be blocked off because we don't want players to accidentally wander here. Please don't accidentally wander here.",

  },

======================================
----
draft
----
flashy city
desert
submerged city
snow
hell? (no, hell doesn't exist.)
mountains.
forests
island/beach
family friendly park place - 
------
====================================

====================================
--------------
Definitely there
---------------
flashy city    - Midtime Anne-Hatta     ( midtown manhattan)           
sth            - Miss (you keep losing it) holloway       (red band has heaven, sometimes it comes close to the surface. a train goes around it to drop you to heaven?)
ffpp           - caroline       (Carrol gardens)
edgy art city  - Upper Madilyn  (North Brooklyn (Williamsburg))
nice home      - downtime Anne-Hatta	 	(tribeca)
---------------
====================================

*/
