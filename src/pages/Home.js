
import AngelFace from '../components/AngelFace';
import About from '../components/About';
import '../styles/pages/Home.css'
import Forms from '../components/Forms';

const Home = () => {
    return (
        <div className='home'>

            <AngelFace />
            <About />
            <Forms />

        </div>
    );
}

export default Home;