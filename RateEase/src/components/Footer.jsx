import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-[#CCC6B8] text-base-content p-10 px-20">
            <aside>
                <img className="w-24 rounded-full" src="https://thumbs.dreamstime.com/b/aabstract-elegant-modern-style-gold-star-logo-icon-black-eps-file-abstract-usable-leader-company-96357409.jpg" alt="Logo" />
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