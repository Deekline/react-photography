import React from "react";

import { CoreMessage } from "../components/CoreMessage/CoreMessage";
import { PortfolioCard } from "../components/PortfolioCard/PortfolioCard";


export const Portfolio = () => {
  const coreMessageData = {
    subtitle: 'our work',
    title: 'portfolio',
    button: 'none',
    description: 'none'
  }

  return (
    <div>
      <div className='wrapper'>
        <div className='container'>
          <div className='ba-main'>

            <CoreMessage
              coreMessageData={coreMessageData}
            />
          </div>
        </div>
      </div>
      <div className="masonry-wrapper">
          <div className="masonry">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
        </div>
    </div>

  );
};
