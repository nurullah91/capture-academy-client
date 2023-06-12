
import useClasses from "../../Hooks/useClasses";
import ClassCard from "./ClassCard";


const Classes = () => {

  const [classes] = useClasses();
  const approvedClasses = classes.filter((classItem) => classItem.status === 'approved');

  return (
    <div className="my-24">
      <h2 className="text-4xl my-5 font-bold text-center">Available Total Classes: {approvedClasses.length}</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* show every single card */}
        {
          approvedClasses.map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>)
        }
      </div>
    </div>
  );
};

export default Classes;