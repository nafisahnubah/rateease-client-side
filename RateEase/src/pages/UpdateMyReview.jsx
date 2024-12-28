import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyReview = () => {
    const reviewObj = useLoaderData();
    const {_id, rating, review} = reviewObj;

    const [updatedRating, setUpdatedRating] = useState(rating);

    function onChange(newValue) {
        setUpdatedRating(newValue);
        console.log(rating)
    }

    const updateReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;

        const reviewObj = {
            rating, review
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
                fetch(`http://localhost:5000/my-reviews/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(reviewObj)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.modifiedCount){
                        Swal.fire({
                            title: "Updated!",
                            text: "Your review has been updated.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    return (
        <div className="p-10">
            <form onSubmit={updateReview} className="grid gap-3">
                <div>
                    <h3 className="font-semibold text-3xl">Update Review</h3>
                </div>
                <Rating
                    style={{ maxWidth: 180 }}
                    value={updatedRating}
                    onChange={onChange}
                    transition="zoom"
                />
                <div className="form-control">
                    <textarea name="review" className="textarea textarea-bordered" rows={6} defaultValue={review} placeholder="Write your review"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[#EDA735] hover:bg-white border-none">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateMyReview;