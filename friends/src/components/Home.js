import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <div>Hello welcome to a simple authentication app</div>
            <br/>
            <Link to="/login">Click here for Login</Link>
        </div>
    );
};

export default Home;