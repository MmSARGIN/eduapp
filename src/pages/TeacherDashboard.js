import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Announcements from "../components/Announcements";

import Lessons from "../components/Lessons";
import Navbar from "../components/Navbar";
import Profil from "../components/Profil";
import Sidebar from "../components/Sidebar";

const TeacherDashboard = () => {
    const [teacher, setteacher] = useState(true);
    const [path, setpath] = useState(true);
    const [menu, setmenu] = useState(true);
    const route = useSelector(state => {
        console.log("burası", state.router.default)

    })
    return <div className="flex bg-white">
        <div>
            <div class="flex sm:hidden">


                <button onClick={() => setmenu(true)} class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                    {menu === false ? "Anasayfa" :
                        // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        "Menüyü Aç"
                    }

                </button>

                {menu === true ?
                    <div class="offcanvas offcanvas-top fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 right-0 border-none h-1/3 max-h-full" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div class="offcanvas-header flex flex-col items-center justify-between">
                            <button class="flex w-full justify-center bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                            </button>
                            <Sidebar teacher={teacher} menu={menu} setmenu={setmenu} path={path} setpath={setpath} /> :


                            {/* <div className="w-3/4 flex justify-center items-center ">

                                {
                                    path === "info" ? <Profil /> : path === "program" ? <Lessons /> : path === "announcement" ? <Announcements /> : "s"
                                }

                            </div> */}
                        </div>
                        <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
                            ...
                        </div>
                    </div> : null}

            </div>
        </div>
        <div className="flex-col w-full hidden sm:flex sm:w-2/4 md:w-1/3 lg:w-1/4">

            {/* <Navbar /> */}
            <Sidebar teacher={teacher} menu={menu} setmenu={setmenu} path={path} setpath={setpath} />
        </div>

        <div className="w-3/4 flex justify-center items-center ">
            {/* <Profil /> */}
            {


                path === "info" ? <Profil /> : path === "program" ? <Lessons /> : path === "announcement" ? <Announcements /> : "s"


            }

        </div>

    </div>;
};

export default TeacherDashboard;
