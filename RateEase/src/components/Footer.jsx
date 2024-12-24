import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
                [Logo]
                <p>
                RateEase
                <br />
                Honest reviews, made simple
                </p>
                <div>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by RateEase Ltd</p>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Links</h6>
                <div className="flex gap-4">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/services'}>Services</Link>
                    <Link to={'/about'}>About</Link>
                    <a className="link link-hover">Contact</a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;