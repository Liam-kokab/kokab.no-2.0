import React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import './Menu.scss';

const PAGES = [
  { title: 'Home', link: '/' },
  { title: 'CV', link: '/CV' },
  { title: 'Space Fighter', link: '/space-fighter' },
];

const Links = () => PAGES.map(({ title, link }) => <LinkButton key={`${title}-${link}`} to={link}>{title}</LinkButton>);

const Menu = () => (
  <nav className="menu">
    <Links />
  </nav>
);

export default Menu;
