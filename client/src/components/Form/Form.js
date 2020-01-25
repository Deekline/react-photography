import React, { useState } from 'react';
import { useHttp } from '../../hooks/http.hook';



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
      console.log(data)
      clearFields()
    } catch ( e ) {
      console.log(e.message)
    }

  }

    return (
        <div>
            <h3>Get in touch with us</h3>
            <p>We love to listen and we are eagerly waiting to talk to you regarding your project.</p>
            <div>
                <i className="fab fa-pinterest-p" />
                <i className="fab fa-pinterest-p" />
                <i className="fab fa-pinterest-p" />
                <i className="fab fa-pinterest-p" />
                <i className="fab fa-pinterest-p" />
            </div>
            <form onSubmit={registerHandler}>
                <input type='text'
                       placeholder='Name'
                       name='name'
                       onChange={handleChange}
                       value={form.name}
                />
                <input type='email'
                       placeholder='Email'
                       name='email'
                       onChange={handleChange}
                       value={form.email}
                />
                <input type='text'
                       placeholder='Phone'
                       name='phone'
                       onChange={handleChange}
                       value={form.phone}
                />
                <input type='textfield'
                       placeholder='Message'
                       name='message'
                       onChange={handleChange}
                       value={form.message}
                />
              <button
                className='btn-large'
                type='submit'
              >Submit</button>
            </form>

        </div>
    )
}