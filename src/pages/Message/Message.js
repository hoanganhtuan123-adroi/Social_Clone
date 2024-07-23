import React from "react";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import Chat from "../../components/Chat/Chat"
import "./Message.css";
function Message() {
    return (
        <div className="message space-x-2 py-2">
            <ProfileLeft />
            <div className="text-[40px] text-red-700">Content</div>
            <Chat/>
        </div>
    );
}

export default Message;
