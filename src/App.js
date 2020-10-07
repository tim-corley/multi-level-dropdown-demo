import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
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
      <NavItem icon={<CaretIcon src={require('./icons/caret.svg')} />}>
        <DropdownMenu />
      </NavItem>
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

const NavItem = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
};

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const DropdownItem = ({ children, leftIcon, rightIcon, goToMenu }) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        {leftIcon && <span className="icon-button">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="icon-button">{rightIcon}</span>}
      </a>
    );
  };
  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            goToMenu="settings"
            leftIcon={<CogIcon src={require('./icons/cog.svg')} />}
          >
            Settings
          </DropdownItem>
          <DropdownItem goToMenu="animals" leftIcon="🦧">
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<ArrowIcon src={require('./icons/arrow.svg')} />}
          >
            <h2>My Skills</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<BoltIcon src={require('./icons/bolt.svg')} />}
          >
            HTML
          </DropdownItem>
          <DropdownItem
            leftIcon={<BoltIcon src={require('./icons/bolt.svg')} />}
          >
            CSS
          </DropdownItem>
          <DropdownItem
            leftIcon={<BoltIcon src={require('./icons/bolt.svg')} />}
          >
            JavaScript
          </DropdownItem>
          <DropdownItem
            leftIcon={<BoltIcon src={require('./icons/bolt.svg')} />}
          >
            Awesomeness!
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          {' '}
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
          <DropdownItem leftIcon="🛠">Test</DropdownItem>
          <DropdownItem leftIcon="🛠">Test</DropdownItem>
          <DropdownItem leftIcon="🛠">Test</DropdownItem>
          <DropdownItem leftIcon="🛠">Test</DropdownItem>
          <DropdownItem leftIcon="🛠">Test</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default App;
