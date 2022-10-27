import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Lessons from "../components/Lessons";
import Navbar from "../components/Navbar";
import Profil from "../components/Profil";
import Sidebar from "../components/Sidebar";

const ParentDashboard = () => {
    const [teacher, setteacher] = useState(true);
    const [path, setpath] = useState(true);
    const route = useSelector(state => {
        console.log("burası", state.router.default)

    })
    return <div className="flex">
        <div className="flex-col w-1/4">
            {/* <Navbar /> */}
            <Sidebar path={path} setpath={setpath} />
        </div>


        <div className="w-3/4 justify-center items-center ">
            {/* <Profil /> */}
            {


                path === "info" ? <Profil /> : path === "homework" ? <Lessons /> : "s"


            }

        </div>

    </div>;
};
export default ParentDashboard;
