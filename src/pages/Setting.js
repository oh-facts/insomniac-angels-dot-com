
import earth2 from '../assets/earth2.jpg'


const Setting = () => {
    return (


        <div className='card-container'>
            <span style={{ fontSize: '2rem', textAlign: 'center', color: ' #ff9324' }}> New Yinneva City </span>

            <div className='card'>
                <img src={earth2} alt='banner' />

                <div className="text-box">

                    <p>
                        <span style={{  textAlign: 'left' }}>
                            Welcome to New Yinneva City, the flashy and expensive city of dreams. Every ambitious young adult wishes they
                            lived here because it is objectively the only way they can ever find their dreams come true. No crisis ever could
                            make anyone want to leave this place.
                        </span>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Setting;