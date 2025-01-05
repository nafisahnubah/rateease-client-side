import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { useLoaderData } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import NoContent from "../components/NoContent";

const Services = () => {
    const [services, setServices] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const {count} = useLoaderData();
    const numberOfPages = Math.ceil(count/itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const handleItemsPerPage = e => {
        e.preventDefault();
        const val = parseInt(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if(currentPage>0){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if(currentPage < pages.length - 1){
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect( () => {
        fetch(`https://rate-ease-server-side.vercel.app/services?page=${currentPage}&size=${itemsPerPage}`)
        .then(res => res.json())
        .then(data => setServices(data));
    }, [currentPage, itemsPerPage])

    return (
        <div>
            <div>
                <h2 className="text-5xl text-center my-10">All Services</h2>
                <p></p>
            </div>
            <div className="mx-auto mb-4 md:px-24">
                {
                    services.length > 0 ? '' : <NoContent></NoContent>
                }
            </div>
            <div className="md:grid mx-auto grid-cols-3 gap-7 mb-4 md:px-24">
                {
                    services.map( service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="mx-auto flex justify-center mb-10 join">
                <button onClick={handlePrevPage} className="join-item btn"><GrFormPrevious/></button>
                {
                    pages.map(page => <button 
                        key={page} 
                        onClick={() => setCurrentPage(page)} 
                        className={`join-item btn ${currentPage === page ? 'btn-active' : ''}`}>{page + 1}</button>)
                }
                <button onClick={handleNextPage} className="join-item btn"><GrFormNext/></button>
                <select value={itemsPerPage} onChange={handleItemsPerPage} className="select select-bordered w-xs max-w-xs">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default Services;