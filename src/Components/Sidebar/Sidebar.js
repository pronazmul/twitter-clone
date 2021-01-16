import { Button } from '@material-ui/core'
import { Explore, Home, MailOutline, MoreHoriz, Notifications, PermIdentity, Twitter } from '@material-ui/icons'
import React from 'react'
import SidebarOption from '../SidebarComponent/SidebarOption/SidebarOption'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Twitter className='sidebar-twitterIcon' />
            <SidebarOption active Icon={Home} text='Home' />
            <SidebarOption Icon={Explore} text='Explore' />
            <SidebarOption Icon={Notifications} text='Notification' />
            <SidebarOption Icon={MailOutline} text='Message' />
            <SidebarOption Icon={PermIdentity} text='Profile' />
            <SidebarOption Icon={MoreHoriz} text='More' />
            {/* Tweet Button */}
            <Button varient='outlined' fullWidth className='tweet--button'>Tweet</Button>
        </div>

    )
}

export default Sidebar