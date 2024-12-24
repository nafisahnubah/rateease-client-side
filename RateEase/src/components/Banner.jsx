import Lottie from "lottie-react";
import bannerAnimation from "../assets/lottie-animations/banner.json";

const Banner = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col mt-12 mb-36 lg:flex-row-reverse gap-0 justify-center">
                    <Lottie className="max-w-xl" animationData={bannerAnimation} loop={true} />
                    <div>
                        <div>
                            <h1 className="text-6xl mb-2">Welcome to <span className="text-[#EDA735]">RateEase</span></h1>
                            <div className="text-6xl">Honest reviews, made simple</div>
                        </div>
                        <p className="py-10 text-2xl">
                            Discover and share experiences with services you love and trust! 
                        </p>
                        <a href="#features" className="btn md:mt-8 text-xl md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">Learn More</a>
                    </div>
                </div>
            </div>
            
            <div className="my-10" id="features">
                <h1 className="text-5xl text-center mt-16">Get Started Today!</h1>
                <p className="py-10 text-xl md:mx-72 text-center">RateEase allows you to easily find and review services from across various categories. Whether you're looking for a local restaurant, a reliable plumber, or the best online course, RateEase is the place where you can:</p>
                <div className="flex mx-24">
                    <div className="card w-96">
                        <figure className="px-10 pt-10 rounded-full">
                            <img
                            src="https://img.icons8.com/ios/50/popular-topic.png"
                            alt="Review icon"/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Read honest reviews</h2>
                            <p>and make informed decisions.</p>
                        </div>
                    </div>
                    <div className="card w-96">
                        <figure className="px-10 pt-10 rounded-full">
                            <img
                            src="https://img.icons8.com/ios/50/hearts--v1.png"
                            alt="Heart icon"/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Add your favorite services</h2>
                            <p>and share your experiences.</p>
                        </div>
                    </div>
                    <div className="card w-96">
                        <figure className="px-10 pt-10 rounded-full">
                            <img
                            src="https://img.icons8.com/ios/50/ratings.png"
                            alt="File icon"/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Manage your reviews</h2>
                            <p>and track your service interactions.</p>
                        </div>
                    </div>
                    <div className="card w-96">
                        <figure className="px-10 pt-10 rounded-full">
                            <img
                            src="https://img.icons8.com/ios/50/search--v1.png"
                            alt="Search icon"/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Explore services</h2>
                            <p>from others and find the best recommendations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;