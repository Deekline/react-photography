import React from "react";

import { Menu } from "../components/Menu/Menu";
import { CoreMessage } from "../components/CoreMessage/CoreMessage";
import { SocialNetworks } from "../components/SocialNetworks/SocialNetworks";


export const MainPage = () => {
  const coreMessageData = {
    subtitle: 'we love',
    title: 'photography',
    button: 'flex',
    description: 'flex'
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className="ba-main container">
          <div className='ba-main__header'>
            <SocialNetworks />
            <img src="http://max-themes.net/demos/oshine/oshine-demo/v7/upload/oshin-logo-new.png" alt="Logo" />
            <Menu />
          </div>
          <CoreMessage
            buttonPath={'/portfolio'}
            coreMessageData={coreMessageData}
          />
        </div>
      </div>
    </div>

  );
};
