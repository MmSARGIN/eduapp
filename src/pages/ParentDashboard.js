import React from "react";
import Lessons from "../components/Lessons";
import Navbar from "../components/Navbar";
import Profil from "../components/Profil";
import Sidebar from "../components/Sidebar";
const ParentDashboard = () => {
    return <div className="flex justify-between">
        <div className="flex-col w-1/4">
            {/* <Navbar /> */}
            <Sidebar />
        </div>
        {/* <Profil /> */}
        <Lessons />
    </div>;
};

export default ParentDashboard;
