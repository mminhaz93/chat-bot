import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user, date }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className='justifyEnd'>
      <div class='message-data'>
        <span class='message-data-name'>
          <i class='fa fa-circle online'></i> {trimmedName}
        </span>
        <span class='message-data-time'>{date}, Today</span>
      </div>
      <div class='message my-message backgroundGreen'>
        {ReactEmoji.emojify(text)}
      </div>
    </div>
  ) : (
    <div className='justifyStart'>
      <div className='message-data float-right'>
        <span className='message-data-time'>{date}, Today</span> &nbsp; &nbsp;
        <span className='message-data-name'>{user}</span>{' '}
      </div>

      <div className='message backgroundLightBlue float-right other-message'>
        {ReactEmoji.emojify(text)}
      </div>
    </div>
  );
};

export default Message;
