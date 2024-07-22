import React from "react";
import Logo from "../../images/S-Network-Logo.png";
import Person from "../../images/person.png";
function Navbar() {
    return (
        <div className="flex justify-between items-center px-[24px] py-[10px] bg-primary">
            <div className="flex items-center">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-[60px] h-[60px] object-cover "
                />
                <span className="text-[15px] text-white font-[600]">
                    Network Linked
                </span>
            </div>

            <div className="flex items-center relative w-[500px] px-[18px] py-[10px] rounded-full bg-slate-50">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                    className="w-full bg-transparent text-textColor text-[16px] font-[500] pl-[10px] outline-none"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search your friends..."
                />
            </div>

            <div className="flex items-center space-x-3">
                <a
                    href="#!"
                    className="w-[40px] h-[40px] rounded-full bg-slate-50 flex items-center justify-center text-[24px]"
                >
                    <i class="fa-brands fa-facebook-messenger"></i>
                </a>
                <a
                    href="#!"
                    className="w-[40px] h-[40px] rounded-full bg-slate-50 flex items-center justify-center text-[24px]"
                >
                    <i class="fa-solid fa-bell"></i>
                </a>
                <a
                    href="#!"
                    className="w-[40px] h-[40px] rounded-full bg-slate-50 flex items-center justify-center text-[24px]"
                >
                    <img
                        src={Person}
                        alt="Person"
                        className="w-full object-cover rounded-full"
                    />
                </a>
            </div>
        </div>
    );
}

export default Navbar;
