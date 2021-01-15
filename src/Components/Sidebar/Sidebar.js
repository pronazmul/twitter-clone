import { Explore, Home, MailOutline, MoreHoriz, Notifications, PermIdentity, Twitter } from '@material-ui/icons'
import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOption'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <>
            <Twitter/>
            <SidebarOption active Icon={Home} text='Home'/>   
            <SidebarOption Icon={Explore} text='Explore'/>   
            <SidebarOption Icon={Notifications} text='Notification'/>   
            <SidebarOption Icon={MailOutline} text='Message'/>   
            <SidebarOption Icon={PermIdentity} text='Profile'/>  
            <SidebarOption Icon={MoreHoriz} text='More'/>           
        </>

    )
}

export default Sidebar