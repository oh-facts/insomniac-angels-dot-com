import earth1 from '../assets/earth1.jpg'
import earth2 from '../assets/earth2.jpg'



const About = () => {
  return (
    <div className='about'>

      <div className='card-container'>
      <span style={{ fontSize: '2vw', textAlign: 'center', color: ' #ff9324' }}> A Godless World </span>
        <div className='card'>
          <img src={earth1} alt='banner' />

          <div className="textbox">
            
            <p>
              <span style={{ fontSize: '0.9vw', textAlign: 'left' }}>
              Welcome to Yinneva, where the people are tired, the devils are in excess, and the Gods are quite dead. Thankfully, 
              some angels still exist and make genuine attempts at preserving the human race. God bless Yinneva.
              </span>
            </p>

          </div>
        </div>
        <span style={{ fontSize: '2vw', textAlign: 'center', color: ' #ff9324' }}> New Yinneva City </span>

        <div className='card'>
          <img src={earth2} alt='banner' />

          <div className="textbox">
           
            <p>
            <span style={{ fontSize: '0.9vw', textAlign: 'left' }}>
             Welcome to New Yinneva City, the flashy and expensive city of dreams. Every ambitious young adult wishes they 
             lived here because it is objectively the only way they can ever find their dreams come true. No crisis ever could
             make anyone want to leave this place.
            </span>
            </p>

          </div>
        </div>
      </div>
    </div>

  );
}

export default About;