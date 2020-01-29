import React, { useState } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { faFacebook,faInstagram,faPinterest, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'

import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const Form = () => {

  const {request} = useHttp ()
  const [form, setForm] = useState({
    name:'',
    email:'',
    phone:'',
    message:''
  })

  const handleChange = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const clearFields = () => {
    setForm({...form, name:'', email:'', phone:'', message: ''})
  }

  const registerHandler = async event => {
    event.preventDefault()
    try {
      const data = request('api/contact/form', 'POST', {...form})
      clearFields()
    } catch ( e ) {
      console.log(e.message)
    }
  }


    return (
        <div className='ba-contact__form'>
            <h3 style={{color: '#af9f66'}}>Get in touch with us</h3>
            <p className='ba-contact__text'>We love to listen and we are eagerly waiting to talk to you regarding your project.</p>
            <div className='ba-social-network'>
              <a href='/'><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="/"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href='/'><FontAwesomeIcon icon={faFacebook}/></a>
              <a href='/'><FontAwesomeIcon icon={faPinterest}/></a>
              <a href="/"><FontAwesomeIcon icon={faTelegram}/></a>
            </div>
            <form onSubmit={registerHandler}>
                <input type='text'
                       placeholder='Name'
                       name='name'
                       onChange={handleChange}
                       value={form.name}
                       className='ba-form__input'
                />
                <input type='email'
                       placeholder='Email'
                       name='email'
                       onChange={handleChange}
                       value={form.email}
                       className='ba-form__input'
                />
                <input type='text'
                       placeholder='Phone'
                       name='phone'
                       onChange={handleChange}
                       value={form.phone}
                       className='ba-form__input'
                />
                <input type='textfield'
                       placeholder='Message'
                       name='message'
                       onChange={handleChange}
                       value={form.message}
                       className='ba-form__input'
                />
              <button
                className='btn-large'
                type='submit'
              >Submit</button>
            </form>

        </div>
    )
}