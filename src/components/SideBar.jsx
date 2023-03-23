import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import { useEffect, useState } from 'react';


import '../styles/components/sidebar.sass';

const SideBar = () => {

  const [imgGitHub, setImgGitHub] = useState("")

  const getImage = async () => {

    const data = await fetch("https://api.github.com/users/eduvinicius")
                      .then((res) => res.json())
                      .catch((err) => err)

    setImgGitHub(data.avatar_url)
  };

  useEffect(() => {
    getImage()
  }, [getImage])

  return (
    <aside id='sidebar'>
      <img src={imgGitHub} alt="Eduardo Vinicius"  />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
    </aside>
  )
}

export default SideBar;