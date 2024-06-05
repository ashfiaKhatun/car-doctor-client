
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    const { _id, img, date, service, price, status } = booking;

    return (
        <>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle text-red-800">
                        X
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                </td>
                <td>{service}</td>
                <td>{date}</td>
                <td>$ {price}</td>
                <th>
                    {
                        status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> : 
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                    }
                </th>
            </tr>
        </>
    );
};

export default BookingRow;