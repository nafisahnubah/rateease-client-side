import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import MyReviewCard from "../components/MyReviewCard";

const MyReviews = () => {

    const {user} = useAuth();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [user.email])

    return (
        <div>
            <h1 className="font-semibold text-4xl text-center my-10">My Reviews</h1>
            <div className="gap-8 mb-4 md:px-24">
                {
                    reviews.map(reviewObj => <MyReviewCard key={reviewObj._id} reviewObj={reviewObj}></MyReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;