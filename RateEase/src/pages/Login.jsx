import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-[#CCC6B8] py-48">
            <div className="card bg-[#D7D1C5] mx-auto max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                    <div>
                    <h1 className="font-semibold text-3xl text-center">Login to RateEase</h1>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <p className="label-text-alt">New User? <Link to={'/signup'}>Signup</Link> </p>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-[#FAD783] hover:bg-white border-none">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;