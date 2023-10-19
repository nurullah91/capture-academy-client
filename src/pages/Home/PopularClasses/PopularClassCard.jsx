
const PopularClassCard = ({ popularClass }) => {
   
    return (
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="">
                <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-700" src={popularClass.image} alt="Class image" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-blue-950/80 group-hover:via-blue-950/70 group-hover:to-blue-950/80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] md:translate-y-[45%] group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-2xl font-bold text-slate-200 py-3 group-hover:py-0">{popularClass.name}</h3>
                <h3 className="text-xl font-semibold text-blue-300 mt-10 group-hover:mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{popularClass.instructorName}</h3>

                <span className="rounded-full bg-blue-600 py-2 px-3.5 text-sm mt-1 text-white">Total enrolled students {popularClass.enrolled}</span>

            </div>
        </div>
    );
};

export default PopularClassCard;