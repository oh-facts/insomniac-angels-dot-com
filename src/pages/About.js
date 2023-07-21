import scene1 from '../assets/homePage/scene1.png'
import earth1 from '../assets/earth1.jpg'

const About = () => {

  return (
    <div className='card-container'>


      <div className='card'>
       
        <img src={scene1} alt='scene1' style={{width:"40%", paddingTop:"7%"}} />

        <div className="text-box">

          <p>
            <span style={{ fontSize: '1.25rem', textAlign: 'left' }}>
             What are 10 things you'd like to do before you die, you think to yourself as you see Mors Code on the NEWS, 
             level a few districts, kill a million something people and rip the president into two and refer to them as 
             the Presidents of Yinnewa.  
             <br />
             <br />
             Its been a few hours since Mors Code started, and things haven't been looking very nice. Even the angels have stopped showing up since 
             they have little intention of being ripped up.
             <br />
             <br />
             (ALF)IA is a first person story driven hack and slasher
            </span>
          </p>

        </div>
      </div>




      <div className='card'>
        <span style={{ fontSize: '2vw', textAlign: 'center', color: ' #ff9324' }}> A Godless World </span>
        <img src={earth1} alt='banner' style={{width:"25%", paddingTop:"5%"}} />

        <div className="text-box">

          <p>
            <span style={{ fontSize: '1.25rem', textAlign: 'left' }}>
              Welcome to Yinneva, where the people are tired, the devils are in excess, and the Gods are quite dead. Thankfully,
              some angels still exist and make genuine attempts at preserving the human race. God bless Yinneva.
            </span>
          </p>

        </div>
      </div>

    </div>

  );

}

export default About;