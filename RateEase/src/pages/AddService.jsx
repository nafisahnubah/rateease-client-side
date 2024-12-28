import { Bounce, toast, ToastContainer } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddService = () => {

    const {user} = useAuth();
    const navigate = useNavigate();

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const company_name = form.company_name.value;
        const company_logo = form.company_logo.value;
        const service_name = form.service_name.value;
        const service_description = form.service_description.value;
        const service_category = form.service_category.value;
        const website = form.website.value;
        const user_email = user.email;

        const service = {
            company_name,
            company_logo,
            service_name,
            service_description,
            service_category,
            website,
            user_email
        }

        fetch('https://rate-ease-server-side.vercel.app/add-service', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                console.log('yes')
                toast.success('Service added!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            }
            setTimeout(() => {
                navigate('/services');
            }, 1500);
        })
    }

    return (
        <div>
            <form onSubmit={handleAddService} className="md:mx-60 mx-10 my-10 p-5 border grid gap-3 border-gray-500 rounded-2xl">
                <div>
                    <h1 className="font-semibold text-4xl text-center">Add a Service</h1>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Company Name</span>
                    </label>
                    <input name="company_name" type="text" placeholder="Company Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Logo URL</span>
                    </label>
                    <input name="company_logo" type="url" placeholder="Logo URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Website</span>
                    </label>
                    <input name="website" type="text" placeholder="Website" className="input input-bordered" required />
                </div>

                <div className="flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Service Name</span>
                        </label>
                        <input name="service_name" type="text" placeholder="Service Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Service Category</span>
                        </label>
                        <input name="service_category" type="text" placeholder="Service Category" className="input input-bordered" required />
                    </div>
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Description</span>
                    </label>
                    <textarea name="service_description" className="textarea textarea-bordered" rows={6} placeholder="Description"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[#EDA735] hover:bg-white border-none">Add Service</button>
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

export default AddService;