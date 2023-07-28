import earth1 from '../assets/earth1.jpg'
import earth2 from '../assets/earth2.jpg'
import '../styles/pages/Setting.css'
import Boroughs from '../components/Boroughs.js'


const Setting = () => {
    return (

        <div className='setting'>


            <h2> A vacant farewell</h2>
            <p> <i>I must go, but don't want to make a scene </i></p>
            <div className='earth-container'>
                <img className='earth2' src={earth2} alt='banner' />
                <img className='earth1' src={earth1} alt='banner' />
            </div>


            <div className='text-box' style={{textAlign:"center"}}>
                <br />
                Welcome to New Yinneva City, a place so wonderful, the planet was named after it. Or was it the other way round?
                <br />
                Now, the angels are disappearing, God is dead, and demons are spawning everywhere you look. Welcome! Hope you enjoy whatever is left, however long it lasts.
                God bless Yinneva.
            </div>

            <hr />

            <h2> A few good settlements</h2>
            <p>
                Explore what remains of a quickly dying world, before it all goes away.
            </p>
            <Boroughs />


        </div>


    );
}

export default Setting;

/*

               
               Boroughs - 

                
                Sox
                Madilyn
                Tensai
                Moon
                Dukes


*/