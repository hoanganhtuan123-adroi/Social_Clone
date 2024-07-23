import React from 'react';
import Avartar from "../../images/person.png"
function Chat() {
    return (
        <div className='bg-primary rounded-lg h-[100vh] '>

            <div className="flex flex-col space-y-2 bg-white relative h-full top-1 rounded-lg shadow-custom">
                <div className='flex flex-col'>
                    <div className='px-5 py-4 ' >
                        <h3 className='text-2xl font-semibold '>Chats</h3>
                    </div>

                    <div className='flex items-center bg-slate-50 px-5 py-4'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input className='text-[15px] font-[500] text-[#2e4153] w-full ms-2 bg-transparent outline-none border-none' type='text' placeholder='Search Contacts...' />
                    </div>

                </div>

                <ul className='px-5 py-4 space-y-3 '>
                    <li className='flex items-center py-2 space-x-4 '>
                        <img src={Avartar} alt="Avatar" className='w-[40px] h-[40px] rounded-full object-cover' />
                        <div className='flex flex-col'>
                            <span className='text-[16px] text-textColor'>Hoang tuan</span>
                            <span className='text-[15px] text-textPrimary'>Active</span>
                        </div>
                    </li>

                </ul>

                <div className='flex items-center justify-between  absolute bottom-0 left-0 right-0'>
                    <div className='flex items-center  py-4 bg-[#f1f5f9] text-primary text-[16px] space-x-2 w-[50%] justify-center hover:bg-bgButton cursor-pointer'>
                        <i class="fa-solid fa-user"></i>
                        <span>+ Add Contact </span>
                    </div>

                    <div className='flex items-center py-4 bg-[#f1f5f9] text-primary text-[16px] space-x-2 w-[50%] justify-center hover:bg-bgButton cursor-pointer'>
                        <i class="fa-solid fa-gear"></i>
                        <span>Setting</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Chat;
