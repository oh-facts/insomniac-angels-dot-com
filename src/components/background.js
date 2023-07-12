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
            <img 
            src={holo}
            alt="holo"
            />

            <img
                src={isHovered ? angel2 : angel}
                alt="banner"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <img
                src={titleBanner}
                alt="title"
            />
        </div>
    );
}

export default Background;