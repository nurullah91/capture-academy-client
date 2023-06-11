import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../../public/error.jpg'
import { Helmet } from 'react-helmet';
const Error = () => {
    const {error, status} = useRouteError();
    return (
        <div className='h-screen'>
            {/* dynamic title */}
            <Helmet>
                <title>Capture Academy | Error</title>
            </Helmet>

            {/* page content */}
            <div className=' flex flex-col items-center justify-between mt-10'>
                <img className='w-[60vw] lg:h-[65vh] h-[40vh]' src={errorImg} alt="Error image" />
                <h1 className="text-6xl font-bold text-rose-600 my-10">{status}</h1>
                <h4 className='font-bold text-2xl text-orange-500'>{error?.message}</h4>

                <Link className='bg-cyan-200 px-4 py-2 rounded-md font-bold mt-5' to='/'>Go to Home</Link>
            </div>
        </div>
    );
};

export default Error;