import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
    
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://rate-ease-server-side.vercel.app/featured-services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className="mt-20">
            <div>
                <h2 className="text-5xl text-center my-10">Featured Services</h2>
                <p></p>
            </div>
            <div className="md:grid grid-cols-3 gap-5 md:px-24 mx-auto">
                {
                    services.map( service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center md:mt-0 mt-10 mb-10">
                <Link to={'/services'} className="btn text-lg md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">View all services</Link>
            </div>
        </div>
    );
};

export default FeaturedServices;