import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Bounce, toast, ToastContainer } from "react-toastify";
import ReviewCard from "../components/ReviewCard";
import NoContent from "../components/NoContent";

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);

    const {company_logo, company_name, service_name, service_category, service_description, website} = service;
    const {id} = useParams();
    const {user} = useAuth();
    console.log(id, user?.email)

    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);

    fetch(`http://localhost:5000/reviews/${id}`)
        .then(res => res.json())
        .then(data => setReviews(data));

    function onChange(newValue) {
        setRating(newValue);
        console.log(rating)
    }

    const submitReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;
        setRating(0);

        const userReview = {
            rating,
            review,
            email: user.email,
            service_id: id
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(userReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                console.log('yes')
                toast.success('Review posted!', {
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
        })
    }

    return (
        <div className="mx-auto">
            <h1 className="font-semibold text-4xl text-center my-10">Service Details</h1>
            <div className="border border-gray-500 mx-auto w-5/6">
                <div className="md:grid grid-cols-2">
                    <div className="p-10">
                        <figure className="max-w-sm">
                            <img
                            src={company_logo}
                            alt={company_name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-3xl">{company_name}</h2>
                            <h3 className="text-2xl">{service_name}</h3>
                            <div className="badge badge-outline">{service_category}</div>
                            <p className="text-xl">{service_description}</p>
                            <a className="text-xl underline" href={website}>{website}</a>
                        </div>
                    </div>

                    <div className="p-10">
                        <form onSubmit={submitReview} className="grid gap-3">
                            <div>
                                <h3 className="font-semibold text-3xl">Add a Review</h3>
                            </div>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                onChange={onChange}
                                transition="zoom"
                            />
                            <div className="form-control">
                                <textarea name="review" className="textarea textarea-bordered" rows={6} placeholder="Write your review"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#EDA735] hover:bg-white border-none">Post</button>
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
                </div>

                <div>
                    <div className="flex justify-between mx-10 md:mx-32 mb-5">
                        <h3 className="font-semibold text-3xl my-5">All User Reviews</h3>
                        <h3 className="font-semibold text-3xl my-5">({reviews.length})</h3>
                    </div>
                    <div className="grid gap-5 mb-10">
                    {
                        reviews.length<=0 ? 
                        <NoContent></NoContent>
                        : 
                        reviews.map(elem => <ReviewCard key={elem._id} elem={elem}></ReviewCard>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;