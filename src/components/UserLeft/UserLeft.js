import React from "react";
function UserLeft() {
    return (
        <div className="bg-primary rounded-lg shadow-custom">
            <div className="bg-white relative rounded-lg w-full top-1">
                <p className="text-[16px] text-textColor font-[600] text-center py-3">
                    hoang tuan
                </p>
                <div className="flex flex-col text-[16px] font-[300] ">
                    <div className="flex items-center space-x-3 px-3 py-3">
                        <i className="text-[22px] fa-solid fa-house"></i>
                        <a href="#!" className="text-[13.5px] text-textSecond font-[400]">
                            Home
                        </a>
                    </div>

                    <div className="flex items-center space-x-3 px-3 py-3 ">
                        <i className="text-[22px] fa-brands fa-facebook-messenger"></i>
                        <a href="#!" className="text-[13.5px] text-textSecond font-[400]">
                            Messenger
                        </a>
                    </div>

                    <div className="flex items-center space-x-3 px-3 py-3 ">
                        <i className="text-[22px] fa-solid fa-bell"></i>
                        <a href="#!" className="text-[13.5px] text-textSecond font-[400]">
                            Notifications
                        </a>
                    </div>

                    <div className="flex items-center space-x-3 px-3 py-3 ">
                        <i className="text-[22px] fa-solid fa-right-from-bracket"></i>
                        <a href="#!" className="text-[13.5px] text-textSecond font-[400]">
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLeft;
