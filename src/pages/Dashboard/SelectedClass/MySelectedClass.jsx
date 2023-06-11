import useSelected from '../../../Hooks/Student/useSelected';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';

const MySelectedClass = () => {

    // getting selected class using useSelected custom hook

    const [selectedClass, refetch] = useSelected();

    const totalPrice = selectedClass.reduce((sum, item) => item.price + sum, 0).toFixed(2)

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`${import.meta.env.VITE_BASE_URL}/selected-class/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })

            }
        })
    }


    return (
        <div>
            <h3 className='text-4xl text-center font-bold'>Total Payable Amount: {totalPrice}</h3>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClass.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="">
                                            <img className='rounded w-32 h-20' src={item.image} alt="Class image" />
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td className='text-right'>{item.price}</td>
                                    <td><span className='bg-cyan-200 p-2 font-semibold rounded-md '>{item.status}</span></td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="bg-rose-600 p-3 text-2xl rounded-md text-white"><FaTrash></FaTrash></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySelectedClass;