import scene1 from '../assets/homePage/scene1.png'

import '../styles/components/About.css'

const About = () => {

  return (

    <div className='about'>

      <img className="scene1" src={scene1} alt='scene1'/>

      <div className='text-box'>

        What are 10 things you'd like to do before you die, you think to yourself as you see Mors Code on the NEWS,
        level a few districts, kill a million something people and rip the president into two and refer to them as
        the Presidents of Yinnewa.
        <br />
        <br />
        Its been a few hours since Mors Code started, and things haven't been looking very nice. Even the angels have stopped showing up since
        they have little intention of being ripped up.
        <br />
        <br />
        (ALF)IA is a first person stylistic slasher with a heavy emphasis on story and exploration. You'll be responsible for the choices you make, and the people it affects.

      </div>

   
    </div>




  );

}

export default About;