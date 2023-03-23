import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PersonalProjectsPage from './components/PersonalProjectsPage';

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects-page' element={<PersonalProjectsPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
