import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { LinkStyled, NavList } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navs = () => {
  const location = useLocation();

  console.log('location:', location);

  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          // eslint-disable-next-line arrow-body-style
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default memo(Navs);
