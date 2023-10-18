import Container from '../../../Components/Container';
import { motion } from "framer-motion"


const WeAre = () => {
    return (
        <div className='we-are-sec py-20 my-12'>
            <Container>
                <h3 className="text-center text-4xl font-bold text-white shadow-md">Who we are</h3>
                
                   
                    <div className=''>
                        <motion.div 
                         initial={{ opacity: 0, scale: 0.5, x:'-100vw' }}
                         animate={{ opacity: 1, scale: 1, x: 0 }}
                         transition={{ type: 'spring', stiffness:200, duration: 1.5 }}
                         whileHover={{scale:1.1 }}
                        className='bg-blue-700/70 text-white mt-3 p-4 border-white border-4 w-3/4 rounded-tl-3xl'>
                            <h3 className="text-xl font-bold">Our Mission</h3>
                            <p>At Capture Academy, we&apos;re dedicated to unlocking your photographic potential. Our mission is to make the art of photography accessible and enjoyable through high-quality online courses.</p>
                        </motion.div>

                        <motion.div 
                         initial={{ opacity: 0, scale: 0.5, x:'100vw' }}
                         animate={{ opacity: 1, scale: 1, x: 0 }}
                         transition={{ type: 'spring', stiffness:200, duration: 1.5 }}
                         whileHover={{scale:1.1 }}
                         className='float-right bg-blue-700/70 text-white my-3 p-4 border-white border-4   w-3/4 rounded-br-3xl'>
                            <h3 className="text-xl font-bold">Our History</h3>
                            <p>Founded by passionate photographers in 2020, Capture Academy has grown into a trusted online photography resource. With a rich history of guiding students, we&apos;re committed to spreading the joy of photography to all corners of the world.</p>
                        </motion.div>

                        <motion.div
                         initial={{ opacity: 0, scale: 0.5, x:'-100vw' }}
                         animate={{ opacity: 1, scale: 1, x: 0 }}
                         transition={{ type: 'spring', stiffness:200, duration: 1.5 }}
                         whileHover={{scale:1.1 }}
                         className='clear-both bg-blue-700/70 text-white p-4 border-white border-4   w-3/4 rounded-tl-3xl'>
                            <h3 className="text-xl font-bold">Values</h3>
                            <p>At Capture Academy, we embrace creativity, diversity, and inclusivity. We value excellence and innovation in photography education. Our community of photographers from diverse backgrounds and skills fosters learning and growth.</p>
                        </motion.div>

                        <motion.div 
                         initial={{ opacity: 0, scale: 0.5, x:'100vw' }}
                         animate={{ opacity: 1, scale: 1, x: 0 }}
                         transition={{ type: 'spring', stiffness:200, duration: 1.5 }}
                         whileHover={{scale:1.1 }}
                         className='float-right bg-blue-700/70 text-white my-3 p-4 border-white border-4   w-3/4 rounded-br-3xl'>
                            <h3 className="text-xl font-bold">Teaching Philosophy</h3>
                            <p>Capture Academy believes in the blend of science and art in photography. Our hands-on, interactive courses empower you to master technical skills while nurturing your creative vision.</p>
                        </motion.div>

                        <motion.div
                         initial={{ opacity: 0, scale: 0.5, x:'-100vw' }}
                         animate={{ opacity: 1, scale: 1, x: 0 }}
                         transition={{ type: 'spring', stiffness:200, duration: 1.5 }}
                         whileHover={{scale:1.1 }}
                         className='clear-both bg-blue-700/70 text-white my-3 p-4 border-white border-4 w-3/4 rounded-b-3xl'>
                            <h3 className="text-xl font-bold">Our Future Plans</h3>
                            <p>Our future includes expanding our course offerings to cover a wide array of photography genres and introducing advanced courses, mentorship programs, and interactive tools.</p>
                        </motion.div>

                 
                </div>

            </Container>
        </div>
    );
};

export default WeAre;