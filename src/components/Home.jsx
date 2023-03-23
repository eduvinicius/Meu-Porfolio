import SideBar from './SideBar';
import MainContent from './MainContent';

import '../styles/components/app.sass';

const Home = () => {
  return (
    <div id="portfolio">
        <h1>Eduardo Vinicius Barbosa</h1>
        <SideBar />
        <MainContent />
    </div>
  )
}

export default Home;