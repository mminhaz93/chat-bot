import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://minhaz-chat-app.herokuapp.com/';

  useEffect(
    () => {
      const { name, room } = queryString.parse(location.search);

      socket = io(ENDPOINT);

      setRoom(room);
      setName(name);

      socket.emit('join', { name, room }, error => {
        if (error) {
          alert(error);
        }
      });
    },
    //States when useEffect will be used
    //Only if the following ENDPOINT, search changes, then use the userEffect
    [ENDPOINT, location.search]
  );

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }

    // console.log(message, messages);
  };

  return (
    <div className='outerContainer'>
      <TextContainer users={users} />
      <div className='container'>
        <InfoBar messages={messages} room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
