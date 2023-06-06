import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiSass,
  DiAngularSimple,
  DiReact,
  DiNodejsSmall
} from 'react-icons/di'

import { SiTypescript } from 'react-icons/si';

import '../styles/components/technologiescontainer.sass';

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
  { id: "angular", name: "Angular", icon: <DiAngularSimple /> },
  { id: "react", name: "React", icon: <DiReact />},
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer;