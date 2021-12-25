import React from 'react'
import './stylesheets/Dashboard.css'

const Dashboard = (props) => {

    const d = new Date()
    const dayofweek = d.getDay()
    const day = d.getDate().toString()
    const month = d.getMonth()
    const hr = d.getHours()
    
    const timeofday = (hr) => {
        if (hr >= 0 && hr < 12) {
            return 'Morning'
        }
        else if (hr >= 12 && hr < 16) {
            return 'Afternoon'
        }
        else return 'Evening'
    }

    const whichday = (dayofweek) => {
        switch (dayofweek) {
            case 0:
                return 'Sunday'
            case 1:
                return 'Monday'
            case 2:
                return 'Tuesday'
            case 3:
                return 'Wednesday'
            case 4:
                return 'Thursday'
            case 5:
                return 'Friday'
            case 6:
                return 'Saturday'
            default:
                return 'Error'
        }
    }

    const whichmonth = (month) => {
        switch (month) {
            case 0:
                return 'January'
            case 1:
                return 'February'
            case 2:
                return 'March'
            case 3:
                return 'April'
            case 4:
                return 'May'
            case 5:
                return 'June'
            case 6:
                return 'July'
            case 7:
                return 'August'
            case 8:
                return 'September'
            case 9:
                return 'October'
            case 10:
                return 'November'
            case 11:
                return 'December'
            default:
                return 'Error'
        }
    }

    return (
        <div className='Dashboard'>
            <h1 className='title'>Good {timeofday(hr)}, {props.username}.</h1>
            <h3 style={{fontSize: '1.5rem', color: '#007bff'}}>
                Today is <strong>{whichday(dayofweek)}</strong>, {whichmonth(month) + ' ' + day}.
                {month === 11 && day === '24' ? ' Merry Christmas Eve!' : ''}
                {month === 11 && day === '25' ? ' Merry Christmas!' : ''}
            </h3>
        </div>
    )
}

export default Dashboard
