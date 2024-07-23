import React from 'react';
import Avatar from "../../images/person.png"

function UserList(){
    return (
    <div className='bg-primary rounded-lg '> 
        <div className="bg-white relative h-full top-1 rounded-lg shadow-custom">
        <div className='flex items-center space-x-4 px-5 py-4 text-2xl font-semibold border-b-[1px]'>
            <i className='fa-regular fa-user  mr-3' ></i>
            <p>All Users: <span>0</span></p>
        </div>
        <ul className='py-2 '>
            <li className='flex items-center space-x-4 px-4 py-2'>
                <img src={Avatar} className='w-[40px] h-[40px] rounded-full object-cover' alt='User'/>
                <div>
                    <h3 className='text-[16px] text-textColor font-[500]'>User name</h3>
                    <span className='text-[14px] text-textPrimary font-[400]'>joined 3 minutes ago</span>
                </div>
            </li>

            <li className='flex items-center space-x-4 px-4 py-2'>
                <img src={Avatar} className='w-[40px] h-[40px] rounded-full object-cover' alt='User'/>
                <div>
                    <h3 className='text-[16px] text-textColor font-[500]'>User name</h3>
                    <span className='text-[14px] text-textPrimary font-[400]'>joined 3 minutes ago</span>
                </div>
            </li>

            <li className='flex items-center space-x-4 px-4 py-2'>
                <img src={Avatar} className='w-[40px] h-[40px] rounded-full object-cover' alt='User'/>
                <div>
                    <h3 className='text-[16px] text-textColor font-[500]'>User name</h3>
                    <span className='text-[14px] text-textPrimary font-[400]'>joined 3 minutes ago</span>
                </div>
            </li>
        </ul>
    </div>
    </div>
    );
}

export default UserList;
