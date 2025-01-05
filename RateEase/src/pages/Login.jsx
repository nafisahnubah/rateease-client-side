import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import welcomeAnimation from "../assets/lottie-animations/login-signup.json";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Bounce, ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state || '/';

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.email);
            setError(null);

            if(!userCredential.user.emailVerified){
                setError("Please verify your email address.");
            }
            else{
                toast.success('Logged in successfully!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                setTimeout(() => {
                    navigate(from);
                }, 1500);
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode, ": ", errorMessage);
          });
        
    }

    return (
        <div className="bg-[#CCC6B8] py-10">
            <div className="card bg-[#D7D1C5] mx-auto max-w-lg w-full shrink-0">
                <form onSubmit={handleLogin} className="card-body">
                    <div>
                    <h1 className="font-semibold text-3xl text-center">Login to RateEase</h1>
                    </div>
                    <div>
                        <Lottie animationData={welcomeAnimation} loop={true} />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <p className="text-md">New User? <Link to={'/signup'}>Signup</Link> </p>
                    </label>
                    </div>
                    <div>
                        {
                            error && <p className="text-red-500">{error}</p>
                        }
                    </div>
                    <div className="form-control mt-2">
                    <button className="btn text-lg bg-[#EDA735] hover:bg-white border-none">Login</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        transition={Bounce}
                    />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;