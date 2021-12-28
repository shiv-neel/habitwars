import React from 'react'
import {Card} from '@material-ui/core'

const HabitListItem = (props) => {
    return (
        <div>
            <Card style={{
                display: 'flex',
                height: '3.5rem',
                padding: '1rem',
                backgroundColor: 'rgba(158, 200, 255, 0.2)',
                marginBottom: '1rem'
            }}>
                <h3 style={{
                    fontSize: '1.25rem'
                }}>{props.title}</h3>
                <p style={{color: '#007bff'}}>Created {props.date}</p>
            </Card>
        </div>
    )
}

export default HabitListItem
