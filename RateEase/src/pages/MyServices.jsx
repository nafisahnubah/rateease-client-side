import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import MyServiceCard from "../components/MyServiceCard";

const MyServices = () => {
    const {user} = useAuth();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://rate-ease-server-side.vercel.app/my-services?email=${user.email}`)
        .then(res => res.json())
        .then(data => setServices(data));
    }, [user.email])

    return (
        <div>
            <h1 className="font-semibold text-4xl text-center my-10">My Services</h1>
            <div className="md:grid grid-cols-3 gap-8 mb-4 md:px-24">
                {
                    services.map(elem => <MyServiceCard key={elem._id} services={services} setServices={setServices} service={elem}></MyServiceCard>)
                }
            </div>
        </div>
    );
};

export default MyServices;