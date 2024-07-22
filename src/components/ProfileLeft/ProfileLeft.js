import React from "react";
import UserLeft from "../UserLeft/UserLeft";
import Community from "../Community/Community";
function ProfileLeft() {
    return (
        <div className="flex flex-col gap-4">
            <UserLeft />
            <Community />
        </div>
    );
}

export default ProfileLeft;
