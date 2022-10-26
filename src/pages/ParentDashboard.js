import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const ParentDashboard = () => {
    return <div className="flex flex-col">
        <Navbar />
        <Sidebar />
    </div>;
};

export default ParentDashboard;
