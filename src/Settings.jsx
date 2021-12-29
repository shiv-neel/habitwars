import React from 'react'
import './stylesheets/Settings.css'
import MaterialUISwitch from './components/MaterialUISwitch'

const Settings = (props) => {
  return (
    <div className='Settings'>
      <h1 className='title'>Settings</h1>
      <h5>Appearance</h5>
      <br></br>
      <ul>
        <li>
          Dark Mode:
          <MaterialUISwitch
            checked={props.darkMode}
            color='primary'
            onChange={() => props.setDarkMode(!props.darkMode)}
          />
        </li>

      </ul>
    </div>
  )
}

export default Settings
