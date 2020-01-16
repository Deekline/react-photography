import React from "react";
import "./CoreMessage.css";

export class CoreMessage extends React.Component {

  changePath() {
    const { buttonPath } = this.props

    console.log(window.location.pathname = buttonPath)
  }


  render() {

    const {coreMessageData} = this.props
    const styleDesctirion = {display: coreMessageData.description}
    const styleButton = {display: coreMessageData.button}

    return (
      <div className='ba-core-message'>
        <h4 className='ba-core-message__subtitle'>{coreMessageData.subtitle}</h4>
        <h1 className='ba-core-message__title'>{coreMessageData.title}</h1>
        <h5 className='ba-core-message__description' style={styleDesctirion}>since 2011, based out hamburg, germany</h5>
        <button
          className='btn-large'
          onClick={(e) => { this.changePath(e) }}
          style={styleButton}
        >view project</button>
      </div>
    );
  }
};




