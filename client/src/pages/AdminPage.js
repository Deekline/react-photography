import React, { useEffect, useState } from 'react';
import {AdminPageList} from '../components/AdminPageList/AdminPageList';
import { useHttp } from '../hooks/http.hook';


export const AdminPage = () => {

  const { request } = useHttp()

  const [dataMessage, setDataMessage] = useState([])
  const [dataReserve, setDataReserve] = useState([])
  const [data, setData] = useState([])
  const [type, setType] = useState(null)

  useEffect( () =>{
    async function loadContent () {
      const newData =  await request( '/api/admin/comment', 'GET', null )
      setDataMessage(newData)
    }
    loadContent()
  }, [])

  useEffect(() => {
    async function loadContent () {
      const newData =  await request( '/api/admin/reserve', 'GET', null )
      setDataReserve(newData)
    }
    loadContent()
  }, [])


 const handleClick = (event) => {
    if(event.target.name === 'reserve') {
      setData(dataReserve)
      setType('Reserve')
    }else if(event.target.name === 'message') {
      setData(dataMessage)
      setType('Message')
    }
  }

  return (
    <div className='ba-adminPage'>
      <div>
        <button onClick={handleClick}
                name ='message'
                className='btn-large'>
          Comments</button>
        <button onClick={handleClick}
                name = 'reserve'
                className='btn-large'>
          Reservations</button>
      </div>

      <div>
        <AdminPageList data={data} type = {type}/>
      </div>
    </div>
  )
}