import SideBar from './SideBar'
import ProjectsContent from './ProjectsContent';

import '../styles/components/projectpage.sass'


const PersonalProjectsPage = () => {
  return (
    <div id='project-page'>
        <h1>Eduardo Vinicius Barbosa</h1>
        <SideBar />
        <ProjectsContent />
    </div>
  )
}

export default PersonalProjectsPage