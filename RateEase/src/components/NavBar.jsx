const NavBar = () => {
    return (
        <div className="navbar md:px-24 bg-[#CCC6B8]">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">[Logo]</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <a className="btn md:px-10 px-4 rounded-3xl bg-[#FAD783] border-none hover:bg-white">Login</a>
                <a className="btn md:px-10 px-4 rounded-3xl bg-[#FAD783] border-none hover:bg-white">Signup</a>
            </div>
        </div>
    );
};

export default NavBar;