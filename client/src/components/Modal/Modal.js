import React, { useState } from 'react';
import './Modal.css'

import { useHttp } from '../../hooks/http.hook';


export const Modal = props =>{

  const { toggleModel } = props
  const { request } = useHttp()
  const [form, setForm] = useState({
    name:'',
    phone:'',
    date: ''
  })

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = request('/', 'POST', {...form})
    console.log(data)
    toggleModel()
  }



  return (
    <div className='ba-modal'>
      <div className="ba-modal__container">
        <form
              onSubmit={handleSubmit}>
          <input type='text'
                 className='ba-bookform__name'
                 placeholder='Name'
                 name = 'name'
                 onChange={handleChange}
          />

          <input type='text'
                 className='ba-bookform__phone'
                 placeholder='Phone'
                 name='phone'
                 onChange={handleChange}
          />
          <input type='date'
                 className='ba-bookform__date'
                 placeholder='Date'
                 name = 'date'
                 onChange={handleChange}
          />
          <button type='submit'>Submit</button>
          <button onClick={ toggleModel }>Cancel</button>
        </form>
      </div>

    </div>
  )

}