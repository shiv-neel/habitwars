import { useState } from 'react'
import * as React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import {Button} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'

import Dashboard from './Dashboard'
import MyHabits from './MyHabits'
import MyFriends from './MyFriends'
import Challenges from './Challenges'
import Settings from './Settings'
import Account from './Account'

import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

function App() {

  const [selectedPage, setSelectedPage] = useState('Dashboard')

  const pageToRender = (s) => {
    switch (s) {
      case 'Dashboard':
        return <Dashboard
          username='username'
        />
        
      case 'My Habits':
        return <MyHabits/>
        
      case 'My Friends':
        return <MyFriends/>
        
      case 'Challenges':
        return <Challenges/>
        
      case 'Settings':
        return <Settings
          darkMode={darkMode} setDarkMode={setDarkMode}
        />
      
      case 'Account':
        return <Account/>

      default:
        return <Dashboard/>
    }
  
  }
  //dark mode
  const [darkMode, setDarkMode] = useState(true)
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${darkMode ? 'dark' : 'light'})`)
  const theme = React.useMemo(() =>createTheme({palette: {mode: prefersDarkMode ? 'dark' : 'light'}}),[prefersDarkMode])
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar setSelectedPage={setSelectedPage}/>
        <Sidebar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        {pageToRender(selectedPage)}
        <CssBaseline />
     
      </ThemeProvider>
    </div>
  );
}

export default App;
