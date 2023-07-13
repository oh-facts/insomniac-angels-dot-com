import earth1 from '../assets/earth1.jpg'

const About = () => {

  return (
    <div className='card-container'>
      <span style={{ fontSize: '2vw', textAlign: 'center', color: ' #ff9324' }}> A Godless World </span>
      <div className='card'>
        <img src={earth1} alt='banner' />

        <div className="text-box">

          <p>
            <span style={{ fontSize: '0.9vw', textAlign: 'left' }}>
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