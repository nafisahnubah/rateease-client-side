import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-[#CCC6B8] text-base-content p-10 px-20">
            <aside>
                <img className="w-24 rounded-full" src="https://img.freepik.com/free-vector/five-star-grading-evaluation-rating-estimating-excellent-review-customer-satisfaction-with-service-highest-score-client-feedback_335657-2684.jpg?t=st=1735396764~exp=1735400364~hmac=21de6935f6014da55c8fd71dc955a2fa551e2574e14302cf61ac27c0817305a2&w=740" alt="Logo" />
                <p className="text-2xl">
                RateEase
                <br />
                Honest reviews, made simple
                </p>
                <div>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by RateEase Ltd</p>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title text-2xl">Links</h6>
                <div className="flex gap-4 text-xl">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/services'}>Services</Link>
                    <a className="link link-hover">Contact</a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;