import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-4">
            <div className="text-center space-y-2\at5">
                <h3 className="text-2xl text-orange-600">Our Services</h3>
                <h3 className="text-5xl">Our Services Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;