import React from 'react';

import './AdminPageList.css';

export const AdminPageList = ( props ) => {
  const { data, type } = props;


  return (
    <div className='ba-adminPage__list'>
      { type === 'Reserve' && (
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Message</th>
          </tr>
          { data.map( ( el ) => {
            return (
              <tr>
                <th>{ el.name }</th>
                <th>{ el.phone }</th>
                <th>{ el.date }</th>
                <th>{ el.message }</th>
              </tr>
            );
          } ) }
          </tbody>
        </table>
      ) }
      { type === 'Message' && (
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
          </tr>
          { data.map( ( el ) => {
            return (
              <tr>
                <th>{ el.name }</th>
                <th>{ el.email }</th>
                <th>{ el.phone }</th>
                <th>{ el.message }</th>
              </tr>
            );
          } ) }
          </tbody>
        </table>
      ) }

    </div>

  );
};