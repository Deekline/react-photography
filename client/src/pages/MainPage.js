import React, { useState } from 'react';


import { CoreMessage } from "../components/CoreMessage/CoreMessage";
import { BookMe } from '../components/BookMe/BookMe';
import { Modal } from '../components/Modal/Modal';


export const MainPage  = () =>  {
  const images = [
    'url(http://max-themes.net/demos/oshine/oshine-demo/v7/upload/newyork.jpg)',
    'url(http://max-themes.net/demos/oshine/oshine-demo/v7/upload/oshin-v7-home.jpg)',
    'url(http://max-themes.net/demos/oshine/oshine-demo/v7/upload/oshin-sf-0026-comp.jpg)'
  ]
const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const coreMessageData = {
      subtitle: 'we love',
      title: 'photography',
      button: 'flex',
      description: 'flex'
    }

    return (
      <div className='wrapper' style={{backgroundImage: `${images[1]}`}}>
        {isModalOpen && <Modal toggleModel = {toggleModal}/> }
        <div className='container'>
          <div className="ba-main container">
            <CoreMessage
              buttonPath={'/portfolio'}
              coreMessageData={coreMessageData}
            />
          </div>
          <BookMe toggleModal={toggleModal}/>
        </div>
      </div>

    );
};
