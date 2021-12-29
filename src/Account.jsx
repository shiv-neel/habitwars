import React from 'react'
import './stylesheets/Account.css'
import { Button } from '@material-ui/core'

const Account = (props) => {
  return (
    <div className='Account'>
      <h1 className='title'>Account</h1>
      <Button variant="contained" color="primary">Sign Out</Button>
    </div >
  )
}

export default Account
