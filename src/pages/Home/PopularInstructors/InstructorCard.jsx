import { FaEnvelope } from 'react-icons/fa';


const InstructorCard = ({ instructor }) => {
    console.log(instructor);

    return (
        <div className="w-full h-[300px] bg-transparent group perspective">
            <div className="relative w-full h-full duration-1000 preserve-3d group-hover:my-rotate-y-180 rounded">
                <div className="absolute backface-hidden w-full h-full shadow-md rounded">
                    <img src={instructor.photoURL} alt="Instructor image" className="w-full h-full rounded" />
                </div>
                <div className="p-5 absolute backface-hidden my-rotate-y-180 w-full h-full bg-blue-300 shadow-md rounded flex flex-col items-center justify-center">

                    <h3 className="text-3xl font-bold">{instructor.displayName}</h3>
                    <h4 className="text-xl flex items-center bg-slate-300  py-3 px-5 mt-5 w-full"><FaEnvelope className='mr-4' /> {instructor.email}</h4>

                    <div className='bg-teal-400 shadow-lg mt-3 py-3 px-6 rounded-md w-1/2 text-center absolute -bottom-20 delay-500 duration-500 group-hover:bottom-6 scale-0 group-hover:scale-75'>
                       <div className="relative">
                       <h3 className="text-2xl">Instructor</h3>
                       {
                        instructor.popular && <span className='absolute -top-5 -right-12 px-3 py-1 rounded-full text-white bg-rose-600'>popular</span>
                       }
                       </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default InstructorCard;