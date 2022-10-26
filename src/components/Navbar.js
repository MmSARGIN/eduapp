import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <div>
        <Link to="/">HOME</Link>
        <br />
        <Link to="/teacher">TEACHER</Link>
        <br />
        <Link to="/parent">PARENT</Link>
        <br />
        <Link to="/login">LOGİN</Link>
    </div>;
};

export default Navbar;
