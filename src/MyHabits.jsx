import {React, useState} from 'react'
import './stylesheets/MyHabits.css'

import HabitListItem from './MyHabitComponents/HabitListItem'

const MyHabits = () => {

    const DUMMY_HABIT_LIST = [
        {
            id: 0, 
            title: 'Go for a walk',
            date: 'June 22, 2021'
        }, 
        {
            id: 1,
            title: 'Avoid smoking',
            date: 'September 14, 2021'
        }
    ]

    const [myHabits, setHabits] = useState(DUMMY_HABIT_LIST)

    return (
        <div className='MyHabits'>
            <h1 className='title'>My Habits</h1>
            <ul>
                {myHabits.map(h => <HabitListItem key={h.id} title={h.title} date={h.date}/>)}
            </ul>
        </div>
    )
}

export default MyHabits
