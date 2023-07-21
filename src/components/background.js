import angel from '../assets/homePage/angel/angelFace.png'
import angel2 from '../assets/homePage/angel/angelFace2.png'
import holo from "../assets/homePage/angel/holo.png"
import titleBanner from "../assets/homePage/angel/title.png"

import { useState } from 'react';

const Background = () => {


    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (

       
        <div className='angel-image'>
          <img className="holo-image"
            src={holo}
            alt="holo"
          />
      
          <img className={`angel-image ${isHovered ? "hovered-image" : ""}`}
            src={isHovered ? angel2 : angel}
            alt="banner"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <img className="title-image"
            src={titleBanner}
            alt="title"
          />
        </div>
     
      
    );
}

export default Background;