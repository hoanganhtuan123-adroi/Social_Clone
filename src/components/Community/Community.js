import React from "react";

function Community() {
    return (
        <div className="bg-primary rounded-lg mt-4 shadow-custom">
            <div className="bg-white relative rounded-lg w-full top-1 py-3">
                <p className="text-[16px] text-textColor font-[600] text-center ">
                    Community
                </p>
                <div className="text-center">
                    <p className="text-[16px] font-[500] text-textPrimary">
                        You are not in any group
                    </p>
                </div>
                {/* 
                <div className="flex flex-col text-[16px] font-[300] ">
                    <div className="flex items-center space-x-3 px-3 py-3">
                        <i className="text-[22px] fa-solid fa-house"></i>
                        <a href="#!">Home</a>
                    </div>
                </div>
                 */}
                <div className="absolute top-0 right-3">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
    );
}

export default Community;
