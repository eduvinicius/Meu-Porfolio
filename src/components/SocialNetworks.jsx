import '../styles/components/socialnetworks.sass';

import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />, website:"https://www.linkedin.com/in/eduardo-viniciusb/"},
    {name: "github", icon: <FaGithub />, website:"https://github.com/eduvinicius"},
    {name: "instagram", icon: <FaInstagram />, website:"https://www.instagram.com/eduviniciusb/"},
];

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        {socialNetworks.map((network) => (
            <a 
              href={network.website} 
              className='social-btn' 
              id={network.name} 
              key={network.name} 
              target='a_blank'
            >
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks;