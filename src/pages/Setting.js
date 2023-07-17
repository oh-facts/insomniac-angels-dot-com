
import earth2 from '../assets/earth2.jpg'


const Setting = () => {
    return (

        <div style={{ display: "flex", justifyContent: "center" }}>

            <div className='card-container' style={{paddingLeft:"15%", paddingRight:"15%"}}>
                <span style={{ fontSize: '2rem',textAlign: 'center', color: ' #ff9324' }}> New Yinneva City </span>

                <div className='card' >
                    <img src={earth2} alt='banner' />

                    <p>
                        <span style={{ textAlign: 'left',lineHeight:"2"}}>
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