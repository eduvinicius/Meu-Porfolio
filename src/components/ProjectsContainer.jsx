import React from 'react'
import { Link } from 'react-router-dom';

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Abaixo você pode conferir minha página com links de diversos projetos que criei durante meus estudos
        sobre programação.
      </p>
      <Link to='/projects-page' className='btn'>Ver Projetos</Link>
    </section>
  )
}

export default ProjectsContainer;