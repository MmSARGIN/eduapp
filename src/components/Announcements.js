import React from "react";

const Announcements = () => {
    return <div className="flex flex-col justify-center h-screen">
        <div className="carousel h-full w-full">
            <div id="item1" className="carousel-item w-full">
                <img src="https://images.pexels.com/photos/13730465/pexels-photo-13730465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="null" className="w-full" />
            </div>
            <div id="item2" className="carousel-item w-full">
                <img src="https://images.pexels.com/photos/13730465/pexels-photo-13730465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="null" className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
                <img src="https://images.pexels.com/photos/13730465/pexels-photo-13730465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="null" className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
                <img src="https://images.pexels.com/photos/13730465/pexels-photo-13730465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="null" className="w-full" />
            </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
            <a href="#item4" className="btn btn-xs">4</a>
        </div>
    </div>;
};

export default Announcements;
