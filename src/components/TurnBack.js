import React from "react";
import { useNavigate } from "react-router-dom";

const TurnBack = () => {

    const navigate = useNavigate();
    return <div>
        <button onClick={() => {

            navigate(-1)
        }}
            className="btn btn-circle border-none hover:bg-gradient-to-b from-blue-600 to-teal-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

    </div>;
};

export default TurnBack;
