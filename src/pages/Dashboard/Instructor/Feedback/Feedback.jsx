import useMyClasses from "../../../../Hooks/Instructors/useMyClasses";

const Feedback = () => {
    const [allMyClasses] = useMyClasses();


    return (
        <div>
            <h2 className="text-4xl py-10 font-bold text-center">Feedback</h2>

             {
                    allMyClasses.map((item, index) => <div className="bg-slate-100 w-11/12 lg:w-9/12 mx-auto px-8 py-12 rounded-md" key={item._id}>
                       {
                        item.feedback && <div>
                             <div className="flex items-center">
                             <h2 className="text-xl font-bold mr-3">{index + 1}. {item.name}</h2>
                             <span className="bg-rose-400 px-3 font-semibold py-1 rounded-lg">{item.status}</span>
                             </div>
                             <p className="mt-3">Feedback: {item.feedback}</p>
                        </div>
                       }
                    </div>
                    )
                }
            

        </div>
    );
};

export default Feedback;