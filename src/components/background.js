import angel from '../assets/angel.png'
import angel2 from '../assets/angel2.png'
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
        <>
            <img
                src={isHovered ? angel : angel2}
                alt="bannerimage"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </>
    );
}

export default Background;