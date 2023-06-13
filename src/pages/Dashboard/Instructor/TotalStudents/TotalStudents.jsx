import useMyClasses from "../../../../Hooks/Instructors/useMyClasses";

const TotalStudents = () => {
    const [allMyClasses] = useMyClasses();

    const totalStudents = allMyClasses.reduce((sum, item) => sum + item.enrolled, 0);
    return (
        <div>
            <h2 className="text-4xl py-10 font-bold text-center">Total Students: {totalStudents}</h2>

            <div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>status</th>
                                <th>Enrolled</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                allMyClasses.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                    <td>{item.enrolled}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TotalStudents;