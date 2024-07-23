import React from 'react';
import './Notification.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import Notifications from '../../components/Notifications/Notifications';
function Notification(){
    return (
        <div className='notification space-x-4'>
            <ProfileLeft/>
            <Notifications/>
        </div>
    );
}

export default Notification;
