import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
    
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/featured-services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-5xl text-center my-10">Featured Services</h2>
                <p></p>
            </div>
            <div className="md:grid grid-cols-3 gap-5 md:px-24">
                {
                    services.map( service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center mb-10">
                <Link to={'/services'} className="btn md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">View all services</Link>
            </div>
        </div>
    );
};

export default FeaturedServices;