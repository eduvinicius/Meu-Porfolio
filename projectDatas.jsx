import { SiReact, SiJavascript, SiTypescript } from 'react-icons/si';

import {v4 as uuidv4} from 'uuid';

import imgSecret from './src/img/secret-word.png';
import imgDbz from './src/img/dbz-cards.png';
import imgCard from './src/img/card-info.png';
import imgToDoList from './src/img/to-do-list.png';
import imgAstro from './src/img/quiz-astro.png';
import imgWeather from './src/img/weather-app.png';
import imgCalculator from './src/img/calculadora-treinamento.png';
import imgApiGitHub from './src/img/api-github.png';

export const projectDatas = [
    {id: 0, name: "Secret Word", description: "Descubra a palavra secreta!", tech: "React", 
        icon: <SiReact id='react' /> , link: "https://secret-word-orpin.vercel.app/", img: imgSecret
    },
    {id: 1, name: "DBZ Cards", description: "Cards de DBZ!", tech: "Javascript", 
        icon: <SiJavascript id='js' />,  link: "https://cards-czbl0j22i-eduvinicius.vercel.app/", img: imgDbz
    },
    {id: 2, name: "Personal Card", description: "Meu card pessoal", tech: "Javascript", 
        icon: <SiJavascript id='js' />, link: "https://card-informacoes-f8pkhp2z9-eduvinicius.vercel.app/", img: imgCard
    },
    {id: 3, name: "Lista de Tarefas", description: "Crie sua lista de tarefas!", tech: "React com Typescript", 
        icon:[<SiReact id='react' key={uuidv4()} />, <SiTypescript id="ts" key={uuidv4()} />] , link: "https://to-do-list-inky-seven.vercel.app/", img: imgToDoList
    },
    {id: 4, name: "Quiz Astronomia", description: "Encare um quiz sobre astronomia!", tech: "React Context e Redux", 
        icon: <SiReact id='react' /> , link: "https://quiz-project-n12in9gob-eduvinicius.vercel.app/", img: imgAstro
    },
    {id: 5, name: "Weather API", description: "Descubra o clima da sua cidade!", tech: "Javascript", 
        icon: <SiJavascript id='js' /> , link: "https://weather-api-pied.vercel.app/", img: imgWeather
    },
    {id: 6, name: "Calculadora Treinamento", description: "Calculo de Vo2, volume de treino e AF!", tech: "React", 
    icon: <SiReact id='react' /> , link: "https://calculadora-treinamento.vercel.app/", img: imgCalculator
    },
    {id: 7, name: "GitHub API", description: "Consulte o repositório de usuários!", tech: "React", 
    icon: <SiReact id='react' /> , link: "https://api-github-self.vercel.app/", img: imgApiGitHub
    },  
]