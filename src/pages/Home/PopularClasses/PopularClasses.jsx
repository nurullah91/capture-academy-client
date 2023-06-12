import usePopularClasses from "../../../Hooks/usePopularClasses";

const PopularClasses = () => {
    const [popularClasses] = usePopularClasses();

    return (
        <div>
            <h3 className="text-center text-4xl font-bold mt-10">Popular classes</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    popularClasses.map(popularClass => <div key={popularClass._id} className="card bg-slate-100 shadow-xl">
                    <figure><img className="" src={popularClass.image} alt="Class image" /></figure>
                    <div className="card-body justify-end">
                      <h2 className="card-title">{popularClass.name}</h2>                      
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;