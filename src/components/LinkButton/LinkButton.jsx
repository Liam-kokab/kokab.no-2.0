import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.scss';

const LinkButton = ({ to = '/', children }) => (
  <div className="link-button">
    <Link to={to}>{children}</Link>
  </div>
);

export default LinkButton;
