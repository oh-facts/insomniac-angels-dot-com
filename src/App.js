
import './App.css';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Faq from './pages/Faq';
import MenuBar from './components/MenuBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='margin-effect'>
        <div class="top-line"></div>
        <div class="left-line"></div>

        <BrowserRouter>
          <MenuBar />


          <Routes>
            <Route index element={<Home />} />
            <Route path="" element={<Home />} />

        
            <Route path="about/setting" element={<Setting />} />
            <Route path="/faq" element={<Faq />} />


          </Routes>

        </BrowserRouter>


        <div class="right-line"></div>
        <div class="bottom-line"></div>
      </div>
    </div>
  );
}

export default App;
