import { Link } from "react-router-dom";
import useClasses from "../../../../Hooks/useClasses";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useSecuredAxios from "../../../../Hooks/useSecuredAxios";

const ManageClasses = () => {
    const [classes, , refetch] = useClasses();

    const [securedAxios] = useSecuredAxios();
    const handleDelete = item => {
    
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

                securedAxios.delete(`${import.meta.env.VITE_BASE_URL}/manage-class/${item._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                `${item.name} has been deleted`,
                                'success'
                            )
                            refetch();
                        }
                    })

            }
        })

    }

    const handleDeny = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to Deny ${item.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Deny'
        }).then((result) => {
            if (result.isConfirmed) {

                securedAxios.patch(`${import.meta.env.VITE_BASE_URL}/manage-class/deny/${item._id}`)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            Swal.fire(
                                'Denied!',
                                `${item.name} has been Denied`,
                                'success'
                            )
                            refetch();
                        }
                    })

            }
        })

    }

    const handleApprove = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to approve ${item.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Approve'
        }).then((result) => {
            if (result.isConfirmed) {

                securedAxios.patch(`${import.meta.env.VITE_BASE_URL}/manage-class/approve/${item._id}`)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            Swal.fire(
                                'Approved!',
                                `${item.name} class Approved`,
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
            <h2 className="text-4xl py-10 font-bold text-center">All Classes: {classes.length}</h2>


            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Action</th>
                                <th>Action</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="">
                                            <img className="w-64 rounded " src={item.image} alt="class image" />
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.email || "not added"}</td>
                                    <td>{item.price}</td>
                                    <td>{item.status}</td>
                                    <td><button disabled={item.status ==="denied"} onClick={() => handleDeny(item)} className="btn btn-sm bg-cyan-600">Deny</button></td>
                                    <td><button disabled={item.status === "approved"} onClick={() => handleApprove(item)} className="btn btn-sm bg-cyan-600">Approve</button></td>
                                    <td><button onClick={() => handleDelete(item)} className="bg-rose-600 p-3 text-2xl rounded-md text-white"><FaTrash></FaTrash></button></td>

                                    <th>
                                        <Link to={`/dashboard/manage-class/feedback/${item._id}`}> <button className="btn btn-xs lg:btn-sm bg-cyan-500" disabled={item.status !== "denied"}>Feedback</button></Link>
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

export default ManageClasses;