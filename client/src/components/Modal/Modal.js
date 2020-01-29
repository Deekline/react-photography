import React, { useState } from 'react';
import './Modal.css';

import { useHttp } from '../../hooks/http.hook';


export const Modal = props => {

  const { toggleModel } = props;
  const { request } = useHttp();
  const [ form, setForm ] = useState( {
    name: '',
    phone: '',
    date: '',
    message: '',
  } );


  const handleChange = ( event ) => {
    setForm( { ...form, [ event.target.name ]: event.target.value } );
  };
  const handleSubmit = async ( event ) => {
    event.preventDefault();
    const data = request( '/api/sign/sign', 'POST', { ...form } );
    console.log( data );
    toggleModel();
  };


  return (
    <div className='ba-modal'>
      <div className="ba-modal__container">
        <form
          onSubmit={ handleSubmit }>
          <input type='text'
                 className='ba-bookform__name'
                 placeholder='Name'
                 name='name'
                 onChange={ handleChange }
                 required
          />

          <input type='text'
                 className='ba-bookform__phone'
                 placeholder='Phone'
                 name='phone'
                 pattern='[3]{1}[8]{1}[0]{1}[0-9]{9}'
                 onChange={ handleChange }
                 required
          />
          <input type='date'
                 className='ba-bookform__date'
                 placeholder='Date'
                 name='date'
                 onChange={ handleChange }
                 required
          />
          <input type='textfield'
                 placeholder='Message'
                 name='message'
                 onChange={ handleChange }
                 value={ form.message }
                 className='ba-form__input'
                 required
          />
          <button type='submit'
                  className='btn-large'>
            Submit
          </button>
          <button onClick={ toggleModel }
                  className='btn-large'>
            Cancel
          </button>
        </form>
      </div>

    </div>
  );

};