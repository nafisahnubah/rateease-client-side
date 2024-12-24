import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleLogout = () => {
        logoutUser()
        .then(() => {
            setError(null);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode, ": ", errorMessage);
        });
    }

    return (
        <div className="navbar md:px-24 bg-[#CCC6B8]">
            <div className="navbar-start justify-start">
                <a className="btn btn-ghost text-xl">[Logo]</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-4">
                    <li><Link to={'/'} className="bg-[#CCC6B8]">Home</Link></li>
                    <li><Link to={'/services'} className="bg-[#CCC6B8]">Services</Link></li>
                    <li><Link to={'/'} className="bg-[#CCC6B8]">About</Link></li>
                    {
                        user && <li><Link to={'/'} className="bg-[#CCC6B8]">Add Service</Link></li>
                    }
                    {
                        user && <li><Link to={'/'} className="bg-[#CCC6B8]">My Reviews</Link></li>
                    }
                    {
                        user && <li><Link to={'/'} className="bg-[#CCC6B8]">My Services</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogout} className="btn md:px-10 px-4 rounded-3xl bg-[#FAD783] border-none hover:bg-white">Logout</button> : 
                    <div className="flex gap-3">
                        {
                            error && <p className="text-red-500">{error}</p>
                        }
                        <Link to={'/login'} className="btn md:px-10 px-4 rounded-3xl bg-[#FAD783] border-none hover:bg-white">Login</Link>
                        <Link to={'/signup'} className="btn md:px-10 px-4 rounded-3xl bg-[#FAD783] border-none hover:bg-white">Signup</Link>
                    </div>
                }  
            </div>
        </div>
    );
};

export default NavBar;