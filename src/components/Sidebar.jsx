import React from 'react'
import '../index.css'
import '../stylesheets/Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import SettingsIcon from '@mui/icons-material/Settings';



const Sidebar = (props) => {

    const setSelectedPage = props.setSelectedPage

    return (
        <div className='navigation'>
            <ul>
                <SidebarItem title='Dashboard' 
                icon={<DonutLargeIcon/>} 
                page='Dashboard' 
                selectedPage={props.selectedPage}
                setSelectedPage={props.setSelectedPage}
                />

                <SidebarItem title='My Habits' 
                icon={<AutoGraphIcon/>} 
                page='My Habits' 
                selectedPage={props.selectedPage}
                setSelectedPage={props.setSelectedPage}
                />

                <SidebarItem title='My Friends' 
                icon={<GroupIcon/>} 
                page='My Friends' 
                selectedPage={props.selectedPage}
                setSelectedPage={props.setSelectedPage}
                />

                <SidebarItem title='Challenges' 
                icon={<EmojiEventsIcon/>} 
                page='Challenges' 
                selectedPage={props.selectedPage}
                setSelectedPage={props.setSelectedPage}
                />

                <SidebarItem title='Account'
                icon={<FaceRoundedIcon/>}
                page='Account'
                selectedPage={props.selectedPage}
                setSelectedPage={props.setSelectedPage}
                />

                <SidebarItem title='Settings' 
                icon={<SettingsIcon/>} 
                page='Settings' 
                selectedPage={props.selectedPage}
                setSelectedPage={props.setSelectedPage}
                />

            </ul>
            

        </div>
    )
}

const SidebarItem = (props) => {

    const updatePage = () => {
        props.setSelectedPage(props.page)
        console.log(props.page)
    }

    const selectedStyles = {
        backgroundColor: 'rgba(158, 200, 255, 0.2)'
    }
    
    const otherStyles = {
        color: 'rgb(156, 157, 165)'
    }
    return (
        <li className='li-item' 
            onClick={updatePage}
            style={props.page == props.selectedPage ? selectedStyles : otherStyles}>
                <a href='#' style={props.page == props.selectedPage ? null : otherStyles}>
                    <div>{props.icon}</div>
                    {props.title}
                </a>
        </li>
    )
}

export default Sidebar
