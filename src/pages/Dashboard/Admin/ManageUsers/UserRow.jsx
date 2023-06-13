import Swal from "sweetalert2";
import useSecuredAxios from "../../../../Hooks/useSecuredAxios";
import { useState } from "react";

const UserRow = ({ user, index }) => {
  const { photoURL, displayName, role, email, _id } = user
  const [securedAxios] = useSecuredAxios();
  const [adminDisable, setAdminDisable] = useState(false)
  const [instructorDisable, setInstructorDisable] = useState(false)
  const handleMakeAdmin = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to ${displayName} make admin?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        securedAxios.patch(`/users/admin/${id}`)
          .then(data => {
            if (data.data.modifiedCount) {
              Swal.fire(
                'Success!',
                `${displayName} is Admin now`,
                'success'
              )
              setAdminDisable(true)
            }
          })



      }
    })
  }

  const handleMakeInstructor = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to ${displayName} make Instructor?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        securedAxios.patch(`/users/instructor/${id}`)
          .then(data => {
            if (data.data.modifiedCount) {
              Swal.fire(
                'Success!',
                `${displayName} is Instructor now`,
                'success'
              )
              setInstructorDisable(true)
            }
          })



      }
    })
  }


  return (

    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="w-24 h-20">
          <img className="rounded-md" src={photoURL} alt="User" />

        </div>
      </td>
      <td>{displayName}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td><button disabled={adminDisable || role === 'admin'} onClick={() => handleMakeAdmin(_id)} className=" btn bg-cyan-400 px-4 py-2 rounded-md">Make Admin</button></td>
      <td><button disabled={instructorDisable || role === 'Instructor'} onClick={() => handleMakeInstructor(_id)} className=" btn bg-cyan-400 px-4 py-2 rounded-md">Make Instructor</button></td>

    </tr>


  );
};

export default UserRow;