import React from "react";
import TurnBack from "./TurnBack";

const Profil = () => {
    return <div>
        <div class="w-full bg-white rounded-xl overflow-hidden  shadow-md p-4 h-full">
            <TurnBack />
            <div class="flex flex-wrap justify-center">
                <div class="w-48 px-4 ">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="falan" class="rounded-full shadow-lg max-w-full h-auto align-middle border-none undefined" />
                </div>
                <div class="w-full flex justify-center py-4 lg:pt-4">
                    <div class="p-4 text-center">
                        <span class="text-xl font-medium block uppercase tracking-wide text-gray-900">22</span>
                        <span class="text-sm text-gray-700">Friends</span>
                    </div>
                    <div class="p-4 text-center">
                        <span class="text-xl font-medium block uppercase tracking-wide text-gray-900">89</span>
                        <span class="text-sm text-gray-700">Comments</span></div><div class="p-4 text-center">
                        <span class="text-xl font-medium block uppercase tracking-wide text-gray-900">10</span>
                        <span class="text-sm text-gray-700">Photos</span></div></div></div><div class="text-center">
                <h1 class="text-gray-900 text-2xl font-serif font-bold leading-normal mt-0 mb-2">Umit Tengiz</h1>
                <div class=" text-gray-700 flex items-center justify-center gap-2">
                    <span class="material-icons undefined text-xl leading-none">place</span>Los Angeles, California</div>
                <div class=" text-gray-700 flex items-center justify-center gap-2">
                    <span class="material-icons undefined text-xl leading-none">work</span>Solution Manager - Creative Tim Officer</div>
                <div class=" text-gray-700 flex items-center justify-center gap-2">
                    <span class="material-icons undefined text-xl leading-none">account_balance</span>University of Computer Science</div></div>
            <div class="p-4 undefined">
                <div class="border-t border-lightBlue-200 text-center px-2 ">
                    <p class="text-blue-gray-700 text-lg font-light leading-relaxed mb-4">An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p></div></div>
            <div class="p-4 undefined">
                <div class="w-full flex justify-center -mt-8"><a href="#pablo" class="mt-5">
                    <button class="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal bg-transparent text-purple-500 hover:bg-purple-50 hover:text-purple-700 hover:bg-purple-50 active:bg-purple-100 undefined">Show more</button></a></div></div></div>
    </div>;
};

export default Profil;
