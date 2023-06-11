import React from 'react';
import useSelected from '../../../Hooks/Student/useSelected';
import { FaTrash } from 'react-icons/fa';

const MySelectedClass = () => {

    // getting selected class using useSelected custom hook

    const [selectedClass, refetch] = useSelected();

    const totalPrice = selectedClass.reduce((sum, item) => item.price + sum, 0).toFixed(2)


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
                                        <button className="bg-rose-600 p-3 text-2xl rounded-md text-white"><FaTrash></FaTrash></button>
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