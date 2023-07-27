import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Boroughs = () => {
  const Profile = ({ name, description }) => {
    return (
      <div className="borough-container">
        <p className="borough" style={{ lineHeight: '2' }}>
          <li>{name}</li>
          <br />
          {description}
        </p>
      </div>
    );
  };

  const profiles = [
    {
      name: 'Anne-Hatta',
      description:
        "The flashy  and expensive Borough of dreams. No crisis ever could make anyone want to leave this place. Mors tested this hypothesis by killing hundreds of thousands and leveling most neighborhoods. It looks like a cement pavement that just set in, with debris of all sorts strewn around. Only 5% of this place remains recognizable. Our protagonist lives here.",
    },
    {
      name: 'Madilyn',
      description:
        'Gained popularity after Moon was deemed "a bad idea" by The BiWeekly. Has the most amount of parks and gardens, and since Mors has been avoiding forests, this place is currently deemed, "Not a bad idea" by the BiWeekly.',
    },
    {
      name: 'The Dawns',
      description:
        "This borough has transformed heavily over the years. Once, plagued by high crime rates and ineffective policies, has quickly turned around because of the President's efforts (Presidents's efforts). This large change, in a rather small amount of time is visible by the sharp shifts in suburban and rural areas. While this borough may have had a troubled past, its present and future are just as bad, since Mors arrived, and made it his home. He rests here on Sundays. Oyasumi Mors kun.",
    },
    {
      name: 'Duchess',
      description:
        'The player finds himself in a culturally different area every step he takes. Its like a hundred different boroughs, squeezed next to each other, each just as unique, as immersive.',
    },
    {
      name: 'Tensi',
      description:
        'Even Mors said no. This place will be blocked off because we dont want players to accidentally wander here.',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...sliderSettings}>
        {profiles.map((profile, index) => (
          <Profile key={index} name={profile.name} description={profile.description} />
        ))}
      </Slider>
    </div>
  );
};

export default Boroughs;
