import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import useMyClasses from "../../../../Hooks/Instructors/useMyClasses";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";

const MyClasses = () => {
    const [allMyClasses, refetch] = useMyClasses();

    

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

                axios.delete(`${import.meta.env.VITE_BASE_URL}/my-class/${id}`)
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
            <h2 className="text-4xl font-bold text-center my-10">My Classes: {allMyClasses.length}</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Enrolled students</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allMyClasses.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div>
                                            <img className="w-28 rounded-md h-16" src={item.image} />
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td className="text-right">$ {item.price}</td>
                                    <td className="text-center">{item.enrolled}</td>
                                    <td><span className='bg-cyan-200 p-2 font-semibold rounded-md '>{item.status}</span></td>
                                    <th>
                                        <Link to={`/dashboard/my-class/update/${item._id}`}> <button><FiEdit className="text-3xl"></FiEdit></button></Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="bg-rose-600 p-2 text-2xl rounded-md text-white"><FaTrash></FaTrash></button>
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

export default MyClasses;