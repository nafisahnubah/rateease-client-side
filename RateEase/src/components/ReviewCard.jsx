import { CgProfile } from "react-icons/cg";
import { CiStar } from "react-icons/ci";

const ReviewCard = ({elem}) => {
    const {rating, review, email} = elem;

    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < rating; i++) {
          stars.push(<CiStar key={i} />);
        }
        return stars;
    };

    return (
        <div>
            <div className="card md:mx-32 mx-10 card-compact bg-base-100">
                <div className="card-body grid gap-5">
                    <div className="flex gap-2 items-center">
                        <CgProfile className="text-xl"/>
                        <div className="badge">{email}</div>
                    </div>
                    <div className="text-3xl">
                    {
                        renderStars(rating)
                    }
                    </div>
                    <h3 className="text-2xl">{review}</h3>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;