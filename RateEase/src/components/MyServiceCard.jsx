import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MyServiceCard = ({service}) => {

    const {_id, company_logo, company_name, service_name, service_category} = service;

    return (
        <div className="mx-auto">
            <div className="card card-compact bg-base-100 h-5/6 w-96">
                <figure>
                    <img
                    src={company_logo}
                    alt={company_name} />
                </figure>
                <div className="card-body grid gap-3">
                    <h2 className="text-3xl">{company_name}</h2>
                    <h3 className="text-2xl">{service_name}</h3>
                    <div className="badge badge-outline">{service_category}</div>
                    <div className="card-actions py-4 justify-between">
                        <Link to={`/services/${_id}`} className="btn md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">View Details</Link>
                        <div className="flex gap-3">
                            <button className="btn rounded-3xl bg-[#EDA735] border-none hover:bg-white text-xl"><MdDelete/></button>
                            <button className="btn rounded-3xl bg-[#EDA735] border-none hover:bg-white text-xl"><FaEdit/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServiceCard;