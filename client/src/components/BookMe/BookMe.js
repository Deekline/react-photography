import React from 'react';
import './BookMe.css'


export const BookMe = props => {
    const {toggleModal} = props
    return (
        <div className='ba-book'>
            <button className='ba-book-button'
            onClick={toggleModal}>
              Book Now
            </button>
        </div>
    )
}