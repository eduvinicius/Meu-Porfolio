import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass';

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, info: "Tags Básicas, Meta Tags"},
  { id: "css", name: "CSS3", icon: <DiCss3 />, info: "Flexbox, Conceitos básicos"},
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, info: "Objetos, Classes, Polimorfismo, Herança"},
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, info: "Express, Api, Banco de Dados"},
  { id: "mysql", name: "MySQL", icon: <DiMysql />, info: "CRUD, SQL"},
  { id: "react", name: "React", icon: <DiReact />, info: "Redux, Context, Hooks"},
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>
                {tech.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer;