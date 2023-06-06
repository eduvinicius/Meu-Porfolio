import '../styles/components/projectscontent.sass'

import { Link } from 'react-router-dom';

import { projectDatas } from '../../projectDatas';

const ProjectsContent = () => {
  return (
    <div id="project-content">
        <div className="scroll">
            <div className="cards">
                {projectDatas.map((project) => (
                    <div className='project-card' id={project.id} key={project.id}>
                        <a href={project.link} target="a_blank">
                            <img src={project.img} />
                        </a>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>Projeto desenvolvido com <span>{project.tech}</span></p>
                        <div className='icons'>
                            {project.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Link to='/' className='btn'>Voltar</Link>
    </div>
  )
}

export default ProjectsContent;