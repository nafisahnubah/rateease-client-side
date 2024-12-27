import { CiStar } from "react-icons/ci";

const MyReviewCard = ({reviewObj}) => {
    const {service_name, company_name, company_logo, rating, review} = reviewObj;

    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<CiStar key={i} />);
        }
        return stars;
    };

    return (
        <div>
            <div className="card w-full mx-10 my-5 card-compact bg-base-100 md:grid grid-cols-3">
                <figure className="md:w-1/2 mx-auto w-3/4 col-span-1">
                    <img
                    src={company_logo}
                    alt={company_name} />
                </figure>
                <div className="card-body grid gap-2">
                    <h2 className="text-3xl">{company_name}</h2>
                    <h3 className="text-2xl">{service_name}</h3>
                    <div className="flex gap-2 text-3xl">
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

export default MyReviewCard;