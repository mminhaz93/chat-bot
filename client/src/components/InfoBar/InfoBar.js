import React from 'react';

import './InfoBar.css';

const InfoBar = ({ messages, room }) => (
  <div className='infoBar'>
    <div className='leftInnerContainer'>
      <h3>{room}</h3>
      <div className='chat-num-messages'>
        already {messages.length} {messages.length > 1 ? 'messages' : 'message'}
      </div>
    </div>

    <div className='rightInnerContainer'>
      <a href='/'>x</a>
    </div>
  </div>
);

export default InfoBar;
