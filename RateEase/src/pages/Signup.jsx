import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import welcomeAnimation from "../assets/lottie-animations/login-signup.json";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { sendEmailVerification } from "firebase/auth";
import auth from "../firebase/firebase.init";

const Signup = () => {

    const { signupUser, logoutUser } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUpperCase) {
            setError("Password must have at least one uppercase letter");
            return;
        }
        if (!hasLowerCase) {
            setError("Password must have at least one lowercase letter.");
            return;
        }
        if (!isValidLength) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        signupUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.email);
            setError(null);
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    toast.success('Verification email sent! Please verify your email to create your account.', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode, ": ", errorMessage);
                });
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode, ": ", errorMessage);
        });

        setTimeout(() => {
            logoutUser()
            .then(() => {
                
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, ": ", errorMessage);
            });
        }, 1000);
        
    }

    return (
        <div className="bg-[#CCC6B8] py-10">
            <div className="card bg-[#D7D1C5] mx-auto w-full max-w-lg shrink-0">
                <form onSubmit={handleSignup} className="card-body">
                    <div>
                    <h1 className="font-semibold text-3xl text-center">Signup to RateEase</h1>
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
                        <p className="text-md">Already have an account? <Link to={'/login'}>Login</Link> </p>
                    </label>
                    </div>
                    <div>
                        {
                            error && <p className="text-red-500">{error}</p>
                        }
                    </div>
                    <div className="form-control mt-2">
                    <button className="btn text-lg bg-[#EDA735] hover:bg-white border-none">Signup</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
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

export default Signup;