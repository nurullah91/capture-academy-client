import { Link } from "react-router-dom";
import useClasses from "../../Hooks/useClasses";


const Classes = () => {

  const [classes] = useClasses();

  return (
    <div className="my-24">
      <h2 className="text-5xl text-green-600 my-5 font-bold text-center">Available Total Classes: {classes.length}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* show every single card */}
        {
          classes.map(singleClass => <div key={singleClass._id} className={`card ${singleClass.availableSeats === 0? "bg-rose-300":"bg-slate-100"} shadow-xl`}>

            <figure><img src={singleClass.image} alt="Class Image" /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{singleClass.name}</h2>
              <p className="font-semibold">Instructor: {singleClass.instructorName}</p>
              <p className="font-semibold">Available Seats: {singleClass.availableSeats}</p>
              <p className="text-orange-500 font-bold">price: ${singleClass.price}</p>
              <div className="card-actions justify-end">
               <Link> <button className="btn bg-blue-300 shadow-md border-none">Select to Enroll</button></Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Classes;