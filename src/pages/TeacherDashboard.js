import React, { useState } from "react";
import Lessons from "../components/Lessons";
import Navbar from "../components/Navbar";
import Profil from "../components/Profil";
import Sidebar from "../components/Sidebar";

const TeacherDashboard = () => {
    const [teacher, setteacher] = useState(true);

    return <div className="flex justify-between">
        <div className="flex-col w-1/4">
            {/* <Navbar /> */}
            <Sidebar teacher={teacher} />
        </div>
        {/* <Profil /> */}
        <Lessons />
    </div>;
};

export default TeacherDashboard;
