import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {

    const {_id, company_logo, company_name, service_name, service_category} = service;

    return (
        <div className="mx-auto md:my-0 my-10">
            <div className="card card-compact mx-auto rounded-md bg-[#eeece7] h-5/6 w-96">
                <figure>
                    <img
                    src={company_logo}
                    alt={company_name} />
                </figure>
                <div className="card-body grid gap-3">
                    <h2 className="text-3xl">{company_name}</h2>
                    <h3 className="text-2xl">{service_name}</h3>
                    <div className="badge badge-outline">{service_category}</div>
                    <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`} className="btn text-lg md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;