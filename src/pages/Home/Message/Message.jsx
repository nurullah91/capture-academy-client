
import './Message.css'

const Message = () => {
    return (
        <div className=' pt-8'>
            <h2 className='text-4xl  font-bold text-center'>A message form CEO</h2>
            <div className="featured-item bg-fixed text-white mb-20 mt-10">

                <div className="md:flex justify-center  items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                    <div>
                        <img className='rounded-full'  src="https://i.ibb.co/x816bnm/pexels-max-fischer-5212339.jpg" alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p className="uppercase text-2xl font-bold text-base-100 my-8">Dear valued campers,</p>
                        <p>

                            A warm welcome from your CEO at Capture Academy! Thank you for being a part of our vibrant photography community. Your passion and commitment to honing your skills are truly inspiring.

                            At Capture Academy, we are dedicated to providing you with top-notch education and resources to fuel your creative journey. Together, let&apo;s capture the world through our lenses and create memories that will last a lifetime.

                            Happy clicking!

                            CEO, Capture Academy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;