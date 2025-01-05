import { CiNoWaitingSign } from "react-icons/ci";

const NoContent = () => {
    return (
        <div className="text-center mx-auto py-28">
            <CiNoWaitingSign className="text-5xl mx-auto"/>
            <h3 className="text-2xl">Sorry, there is no content to be shown!</h3>
        </div>
    );
};

export default NoContent;