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
                <img className="w-16 rounded-full" src="https://img.freepik.com/free-vector/five-star-grading-evaluation-rating-estimating-excellent-review-customer-satisfaction-with-service-highest-score-client-feedback_335657-2684.jpg?t=st=1735396764~exp=1735400364~hmac=21de6935f6014da55c8fd71dc955a2fa551e2574e14302cf61ac27c0817305a2&w=740" alt="Logo" />
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
                    user ? <button onClick={handleLogout} className="btn md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">Logout</button> : 
                    <div className="flex gap-3">
                        {
                            error && <p className="text-red-500">{error}</p>
                        }
                        <Link to={'/login'} className="btn md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">Login</Link>
                        <Link to={'/signup'} className="btn md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">Signup</Link>
                    </div>
                }  
            </div>
        </div>
    );
};

export default NavBar;