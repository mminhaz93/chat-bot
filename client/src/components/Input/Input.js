import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className='form chat-message'>
    <textarea
      name='message-to-send'
      id='message-to-send'
      placeholder='Type your message'
      rows='3'
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => (event.key === 'Enter' ? sendMessage(event) : null)}
    ></textarea>

    <button onClick={e => sendMessage(e)}>Send</button>
  </form>
);

export default Input;
