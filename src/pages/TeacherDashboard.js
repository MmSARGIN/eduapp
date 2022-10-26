import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const TeacherDashboard = () => {
    const [teacher, setteacher] = useState(true);

    return <div>
        <Navbar />
        <Sidebar teacher={teacher} />
    </div>;
};

export default TeacherDashboard;
