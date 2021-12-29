import React from 'react'
import '../stylesheets/Navbar.css'
import Logo from './Logo';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'

const Navbar = (props) => {
  return (
    <>
      <p className='logo'><Logo /></p>
      <nav className='nav-menu'>
        <NavItem onClick={() => props.setSelectedPage('My Friends')} icon={<GroupAddIcon fontSize='medium' style={{ color: 'lightgray', fontSize: '30px' }} />} />
        <NavItem icon={<NotificationsSharpIcon fontSize='medium' style={{ color: 'lightgray', fontSize: '30px' }} />} />
        <NavItem onClick={() => props.setSelectedPage('Account')} icon={<AccountCircleSharpIcon fontSize='large' style={{ fontSize: '50px', marginLeft: 5, color: '007bff' }} />} />
      </nav>
    </>
  )
}

const NavItem = (props) => {
  return (
    <li onClick={props.onClick} className='nav-item'>
      <div className='icon-btn'>
        {props.icon}
      </div>
    </li>
  )
}
export default Navbar
