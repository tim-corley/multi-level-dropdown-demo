import React from 'react';
import { ArrowIcon } from './icons/arrow.svg';
import { BellIcon } from './icons/bell.svg';
import { BoltIcon } from './icons/bolt.svg';
import { CaretIcon } from './icons/caret.svg';
import { ChevronIcon } from './icons/chevron.svg';
import { CogIcon } from './icons/cog.svg';
import { MessengerIcon } from './icons/messenger.svg';
import { PlusIcon } from './icons/plus.svg';
import './styles.css';

const App = () => {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon src={require('./icons/plus.svg')} />} />
      <NavItem icon={<BellIcon src={require('./icons/bell.svg')} />} />
      <NavItem
        icon={<MessengerIcon src={require('./icons/messenger.svg')} />}
      />
    </Navbar>
  );
};

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};

const NavItem = ({ icon }) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {icon}
      </a>
    </li>
  );
};

export default App;
