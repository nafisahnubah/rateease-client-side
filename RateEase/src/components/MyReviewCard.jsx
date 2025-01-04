import { CiStar } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewCard = ({reviewObj, reviews, setReviews}) => {
    const {_id, service_name, company_name, company_logo, rating, review} = reviewObj;

    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<CiStar key={i} />);
        }
        return stars;
    };

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
                fetch(`https://rate-ease-server-side.vercel.app/my-reviews/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your review has been deleted.",
                            icon: "success"
                        });
                        const remaining = reviews.filter(rev => rev._id !== _id);
                        setReviews(remaining);
                    }
                })
            }
        });
    }

    return (
        <div>
            <div className="card md:w-full max-w-full mx-10 my-5 card-compact rounded-md bg-[#eeece7] md:grid grid-cols-3">
                <figure className="w-1/2 mx-auto py-5 col-span-1">
                    <img
                    src={company_logo}
                    alt={company_name} />
                </figure>
                <div className="card-body grid gap-2 col-span-1">
                    <h2 className="text-3xl">{company_name}</h2>
                    <h3 className="text-2xl">{service_name}</h3>
                    <div className="flex gap-2 text-3xl">
                    {
                        renderStars(rating)
                    }
                    </div>
                    <h3 className="text-2xl">{review}</h3>
                </div>
                <div className="flex gap-8 md:mb-0 mb-10 justify-start md:mx-0 mx-5 md:justify-center items-center">
                    <button onClick={() => handleDelete(_id)} className="btn rounded-3xl bg-[#EDA735] border-none hover:bg-white text-xl"><MdDelete/></button>
                    <Link to={`/my-reviews/${_id}`} className="btn rounded-3xl bg-[#EDA735] border-none hover:bg-white text-xl"><FaEdit/></Link>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;