import React from "react";
import { SocialNetworks } from '../components/SocialNetworks/SocialNetworks'
import { CoreMessage } from "../components/CoreMessage/CoreMessage";
import { Menu } from '../components/Menu/Menu'

export const Portfolio = () => {
  const coreMessageData = {
    subtitle: 'our work',
    title: 'portfolio',
    button: 'none',
    description: 'none'
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='ba-main'>
          <div className='ba-main__header'>
            <SocialNetworks />
            <img src="http://max-themes.net/demos/oshine/oshine-demo/v7/upload/oshin-logo-new.png" alt="Logo" />
            <Menu />
          </div>
          <CoreMessage
            coreMessageData={coreMessageData}
          />
        </div>
      </div>

    </div>
  );
};