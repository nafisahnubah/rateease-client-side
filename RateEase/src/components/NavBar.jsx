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
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#eeece7] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/services'}>Services</Link></li>
                        {
                            user && <li><Link to={'/add-service'}>Add Service</Link></li>
                        }
                        {
                            user && <li><Link to={'/my-reviews'}>My Reviews</Link></li>
                        }
                        {
                            user && <li><Link to={'/my-services'}>My Services</Link></li>
                        }
                    </ul>
                </div>
                <img className="w-16 rounded-full" src="https://thumbs.dreamstime.com/b/aabstract-elegant-modern-style-gold-star-logo-icon-black-eps-file-abstract-usable-leader-company-96357409.jpg" alt="Logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-4">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/services'}>Services</Link></li>
                    {
                        user && <li><Link to={'/add-service'}>Add Service</Link></li>
                    }
                    {
                        user && <li><Link to={'/my-reviews'}>My Reviews</Link></li>
                    }
                    {
                        user && <li><Link to={'/my-services'}>My Services</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogout} className="btn text-lg md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">Logout</button> : 
                    <div className="flex gap-3">
                        {
                            error && <p className="text-red-500">{error}</p>
                        }
                        <Link to={'/login'} className="btn text-lg md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">Login</Link>
                        <Link to={'/signup'} className="btn text-lg md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">Signup</Link>
                    </div>
                }  
            </div>
        </div>
    );
};

export default NavBar;