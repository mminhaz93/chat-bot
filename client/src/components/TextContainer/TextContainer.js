import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div></div>
    {users ? (
      <div>
        <h5>
          {users.length} {users.length > 1 ? 'Particiapants' : 'Participant'}
        </h5>
        <div className='activeContainer'>
          <ul className='list'>
            {users.map(({ name }) => (
              <li key={name} className='activeItem clearfix'>
                <div className='about'>
                  <div className='name'>{name}</div>
                  <div className='status'>
                    <img
                      className='status-img'
                      alt='Online Icon'
                      src={onlineIcon}
                    />{' '}
                    online
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
