import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyServiceCard = ({service, services, setServices}) => {

    const {_id, company_logo, company_name, service_name, service_category} = service;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://rate-ease-server-side.vercel.app/my-services/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your service has been deleted.",
                            icon: "success"
                        });
                        const remaining = services.filter(serv => serv._id !== _id);
                        setServices(remaining);
                    }
                })
            }
          });
    }

    return (
        <div className="mx-auto md:my-0 my-10">
            <div className="mx-auto card rounded-md card-compact bg-[#eeece7] h-5/6 w-96">
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
                        <Link to={`/services/${_id}`} className="btn text-lg md:px-10 px-4 rounded-3xl bg-[#EDA735] border-none hover:bg-white">View Details</Link>
                        <div className="flex gap-3">
                            <button onClick={() => handleDelete(_id)} className="btn rounded-3xl bg-[#EDA735] border-none hover:bg-white text-xl"><MdDelete/></button>
                            <Link to={`/my-services/${_id}`} className="btn rounded-3xl bg-[#EDA735] border-none hover:bg-white text-xl"><FaEdit/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServiceCard;