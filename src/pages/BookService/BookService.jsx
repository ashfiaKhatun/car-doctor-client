
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Service booked successfully');
            }
        })
    }

    return (
        <div>
            <h2 className="text-center text-3xl">Book Service: {title}</h2>
            <div className="lg:p-20">
                <form onSubmit={handleBookService}>
                    <div className="grid grid-cols-2 gap-4 form-control rounded-xl">
                        <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="input w-full mt-2 input-bordered" />

                        <input type="date" name="date" className="input w-full mt-2 input-bordered" />

                        <input type="email" name="email" placeholder="Your Email" defaultValue={user?.email} className="input w-full mt-2 input-bordered" />

                        <input type="text" name="price" defaultValue={"$ "+price} className="input w-full mt-2 input-bordered" />


                        <input type="submit" value="Order Confirm" className="btn rounded-md col-span-2 bg-orange-600 hover:bg-orange-800 text-white py-2 font-bold cursor-pointer" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookService;