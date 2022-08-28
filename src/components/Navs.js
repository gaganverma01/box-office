import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'starred' },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          // eslint-disable-next-line arrow-body-style
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
