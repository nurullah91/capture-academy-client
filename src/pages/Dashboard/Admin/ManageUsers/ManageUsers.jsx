import { useEffect, useState } from "react";
import useSecuredAxios from "../../../../Hooks/useSecuredAxios";
import UserRow from "./UserRow";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [securedAxios] = useSecuredAxios();

    useEffect(() => {
        securedAxios.get('/users')
            .then(data => {
                setUsers(data.data)
            })

    }, [securedAxios])

    return (
        <div>
          <h2 className="text-cyan-600 font-bold text-4xl text-center my-10">Manage User</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        users.map((user, index)=><UserRow key={user._id} user={user} index={index}></UserRow>)
                     }
                      
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;