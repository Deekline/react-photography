import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./SocialNetworks.css";
import { faFacebook,faInstagram,faPinterest } from '@fortawesome/free-brands-svg-icons'


//library.add(fab, faFacebook, faInstagram, faPinterest)

export const SocialNetworks = () => {
  return (
    <div className='ba-social-network'>
      <a href='/'><FontAwesomeIcon icon={faInstagram} /></a>
      <a href='/'><FontAwesomeIcon icon={faFacebook}/></a>
      <a href='/'><FontAwesomeIcon icon={faPinterest}/></a>
    </div>
  );
};



