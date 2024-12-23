import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar md:px-24 bg-[#CCC6B8]">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">[Logo]</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li><Link to={'/'} className="bg-[#CCC6B8]">Home</Link></li>
                    <li><Link to={'/services'} className="bg-[#CCC6B8]">Services</Link></li>
                    <li><Link className="bg-[#CCC6B8]">About</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <Link to={'/login'} className="btn md:px-10 px-4 rounded-3xl bg-[#FAD783] border-none hover:bg-white">Login</Link>
                <Link to={'/signup'} className="btn md:px-10 px-4 rounded-3xl bg-[#FAD783] border-none hover:bg-white">Signup</Link>
            </div>
        </div>
    );
};

export default NavBar;