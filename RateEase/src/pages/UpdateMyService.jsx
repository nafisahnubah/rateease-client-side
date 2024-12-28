import { Bounce, toast, ToastContainer } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyService = () => {

    const service = useLoaderData();
    const {_id, company_logo, company_name, website, service_name, service_category, service_description} = service;

    const handleUpdateService = (e) => {
        e.preventDefault();
        const form = e.target;
        const company_name = form.company_name.value;
        const company_logo = form.company_logo.value;
        const service_name = form.service_name.value;
        const service_description = form.service_description.value;
        const service_category = form.service_category.value;
        const website = form.website.value;

        const service = {
            company_name,
            company_logo,
            service_name,
            service_description,
            service_category,
            website
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://rate-ease-server-side.vercel.app/my-services/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(service)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.modifiedCount){
                        Swal.fire({
                            title: "Updated!",
                            text: "Your service has been updated.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    return (
        <div>
            <form onSubmit={handleUpdateService} className="md:mx-60 mx-10 my-10 p-5 border grid gap-3 border-gray-500 rounded-2xl">
                <div>
                    <h1 className="font-semibold text-4xl text-center">Update Service</h1>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Company Name</span>
                    </label>
                    <input name="company_name" type="text" defaultValue={company_name} placeholder="Company Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Logo URL</span>
                    </label>
                    <input name="company_logo" type="url" defaultValue={company_logo} placeholder="Logo URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Website</span>
                    </label>
                    <input name="website" type="text" defaultValue={website} placeholder="Website" className="input input-bordered" required />
                </div>

                <div className="flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Service Name</span>
                        </label>
                        <input name="service_name" type="text" defaultValue={service_name} placeholder="Service Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Service Category</span>
                        </label>
                        <input name="service_category" type="text" defaultValue={service_category} placeholder="Service Category" className="input input-bordered" required />
                    </div>
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Description</span>
                    </label>
                    <textarea name="service_description" className="textarea textarea-bordered" rows={6} defaultValue={service_description} placeholder="Description"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[#EDA735] hover:bg-white border-none">Update Service</button>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition={Bounce}
                />
            </form>
        </div>
    );
};

export default UpdateMyService;