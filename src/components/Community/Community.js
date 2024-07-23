import React from "react";

function Community() {
    return (
        <div className="bg-primary rounded-lg mt-4 shadow-custom">
            <div className="bg-white relative rounded-lg w-full top-1 py-3">
               
                    <p className="text-[18px] text-textPrimary font-[600] text-center ">
                        Community
                    </p>

                    <div className="absolute top-[14px] right-4 cursor-pointer">
                        <i class="fa-solid fa-plus"></i>
                    </div>
              

                <div className="text-center mt-2 text-textPrimary">
                    <p className="text-[18px] font-[500] ">
                        You are not in any group
                    </p>

                </div>


            </div>
        </div>
    );
}

export default Community;
