import React from 'react'
import './stylesheets/Account.css'
import { Button } from '@material-ui/core'

const Account = (props) => {
    return (
        <div className='Account'>
            <h1 className='title'>Account</h1>
            <Button style={{
                backgroundColor: 'rgba(158, 200, 255, 0.2)',
                color: 'white'
                }}>Sign Out</Button>
        </div>
    )
}

export default Account
