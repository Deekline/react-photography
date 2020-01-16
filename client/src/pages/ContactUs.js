import React from "react";
import { SocialNetworks } from "../components/SocialNetworks/SocialNetworks";
import { Menu } from '../components/Menu/Menu'
import { Form } from '../components/Form/Form'


export const ContactUs = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='ba-contact__header'>
          <SocialNetworks />
          <img src="http://max-themes.net/demos/oshine/oshine-demo/v7/upload/oshin-logo-new.png" alt="Logo" />
          <Menu />
        </div>
        <Form />
      </div>
    </div>
  );
};