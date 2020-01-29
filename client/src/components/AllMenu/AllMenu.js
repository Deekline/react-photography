import React, {Component} from 'react';
import './AllMenu.css'
import { Menu } from '../Menu/Menu';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';



export default class AllMenu extends Component {
  render() {
    return (
      <div className="ba-main__header">
        <SocialNetworks/>
        <img className='ba-header__image' src="http://max-themes.net/demos/oshine/oshine-demo/v7/upload/oshin-logo-new.png" alt="Logo" />
        <Menu/>
      </div>
    )
  }
}