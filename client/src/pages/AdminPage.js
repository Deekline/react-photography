import React, { useState } from 'react';
import {AdminPageList} from '../components/AdminPageList/AdminPageList';
import { useHttp } from '../hooks/http.hook';


export const AdminPage = () => {

  const { request } = useHttp()

  const [data, setData] = useState([])


  const handleClick = async (event) => {
    const newData = await request( '/admin', 'GET', null )
    setData(newData)
  }


  return (
    <div>
      <button onClick={handleClick}>Comments</button>
      <button onClick={handleClick}>Reservations</button>
      <div>
        <AdminPageList data={data}/>
      </div>
    </div>
  )
}