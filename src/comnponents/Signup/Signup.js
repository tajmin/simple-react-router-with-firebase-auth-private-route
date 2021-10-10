import React from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <h1>Please Register </h1>
            <form>
                <input type="email" placeholder="enter email" />
                <br />
                <input type="password" placeholder="min 6 characters" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <NavLink to="/login">Already an user? Login Now</NavLink>
        </div>
    );
};

export default Signup;