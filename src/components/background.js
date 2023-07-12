import angel from '../assets/angelFace.png'
import angel2 from '../assets/angelFace2.png'
import titleBanner from "../assets/title.png"
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