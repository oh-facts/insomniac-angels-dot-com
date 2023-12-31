
import './App.css';
import './styles/Common.css'

import Home from './pages/Home';
import Setting from './pages/Setting';
import Faq from './pages/Faq';
import MenuBar from './components/MenuBar/MenuBar';
import Media from './pages/Media';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './components/About';
/*
import Characters from './pages/Characters';
import Combat from "./pages/Combat";
*/
import Team from './pages/Team';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';


function App() {

  return (
    <div className="App">


      <BrowserRouter>


        <div className='viewport'>
          <MenuBar />
          <Routes>

            <Route index element={<Home />} />
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="about/setting" element={<Setting />} />
            
            { /*
              <Route path="about/characters" element={<Characters />} />
            <Route path="about/combat" element={<Combat />} />
            */
            }
            <Route path="info/team" element={<Team />} />
            <Route path="media" element={<Media />} />

            <Route path="/info/faq" element={<Faq />} />

            <Route path="info/community" element={<Community />} />
            <Route path="info/contact" element={<Contact />} />

            <Route path="*" element={<Error404 />} />



          </Routes>
        </div>

      </BrowserRouter>


      <div class="top-line"></div>
      <div class="left-line"></div>
      <div class="right-line"></div>
      <div class="bottom-line"></div>


    </div >
  );
}

export default App;
