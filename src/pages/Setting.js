import earth1 from '../assets/earth1.jpg'
import earth2 from '../assets/earth2.jpg'
import '../styles/pages/Setting.css'

const Setting = () => {
    return (

        <div className='setting'>


            <span style={{ fontSize: '2rem', textAlign: 'center', color: ' #ff9324' }}> New Yinneva City </span>

            <img src={earth2} alt='banner' />

            <div className='text-box'>
                <span style={{ textAlign: 'left', lineHeight: "2" }}>
                    Welcome to New Yinneva City, the flashy and expensive city of dreams. Every ambitious young adult wishes they
                    lived here because it is objectively the only way they can ever find their dreams come true. No crisis ever could
                    make anyone want to leave this place.
                </span>
            </div>

            <span style={{ fontSize: '2vw', textAlign: 'center', color: ' #ff9324' }}> A Godless World </span>
            <img src={earth1} alt='banner' style={{ width: "25%", paddingTop: "5%" }} />



            < div className='text-box'>

                Welcome to Yinneva, where the people are tired, the devils are in excess, and the Gods are quite dead. Thankfully,
                some angels still exist and make genuine attempts at preserving the human race. God bless Yinneva.

            </div>

        </div>


    );
}

export default Setting;