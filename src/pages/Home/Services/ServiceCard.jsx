import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const {_id, title, img, price} = service;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure className="h-60"><img src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className="font-bold text-orange-600">Price: {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/book/${_id}`}><button className="btn ">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;