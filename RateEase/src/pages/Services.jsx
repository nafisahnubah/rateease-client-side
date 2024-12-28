import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://rate-ease-server-side.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-5xl text-center my-10">All Services</h2>
                <p></p>
            </div>
            <div className="md:grid grid-cols-3 gap-7 mb-4 md:px-24">
                {
                    services.map( service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;