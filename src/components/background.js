import angel from '../assets/homePageCard/angelFace.png'
import angel2 from '../assets/homePageCard/angelFace2.png'
import holo from "../assets/homePageCard/holo.png"
import titleBanner from "../assets/homePageCard/title.png"

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

        <div className="Background">
            <img style={{width:"18%"}}
            src={holo}
            alt="holo"
            />

            <img style={{width:"20%"}}
                src={isHovered ? angel2 : angel}
                alt="banner"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <img style={{width:"65%"}}
                src={titleBanner}
                alt="title"
            />
        </div>
    );
}

export default Background;