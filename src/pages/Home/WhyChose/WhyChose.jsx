import Container from "../../../Components/Container";
import { motion } from "framer-motion"


const WhyChose = () => {
    return (
        <div className="chose-sec py-20">
            <Container>
                <h2 className="text-4xl font-bold mb-10 text-center text-white ">Why choose us?</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <motion.div
                        initial={{ scale: 1, x: 0 }}
                        whileHover={{
                            scale: 1.2,
                            x: '50px',
                            zIndex:100
                        }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            stiffness: 200
                        }}
                        className="backdrop-blur-md py-6 px-3 rounded-lg bg-blue-500/20 border-t-4 border-b-4 border-blue-200">
                        <h2 className="text-5xl text-center font-bold text-slate-100">50+</h2>
                        <p className="text-center text-xl font-semibold text-slate-200">Instructors</p>
                    </motion.div>
                  
                    <motion.div
                        initial={{ scale: 1, x: 0 }}
                        whileHover={{
                            scale: 1.2,
                            x: '-50px',
                            zIndex:100
                        }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            stiffness: 200
                        }}
                        className="backdrop-blur-md py-6 px-3 rounded-lg bg-blue-500/20 border-t-4 border-b-4 border-blue-200">
                        <h2 className="text-5xl text-center font-bold text-slate-100">500+</h2>
                        <p className="text-center text-xl font-semibold text-slate-200">Recorded class</p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 1, x: 0 }}
                        whileHover={{
                            scale: 1.2,
                            x: '50px',
                            zIndex:100
                        }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            stiffness: 200
                        }}
                        className="backdrop-blur-md py-6 px-3 bg-blue-500/20 rounded-lg border-t-4 border-b-4 border-blue-200">
                        <h2 className="text-5xl text-center font-bold text-slate-100">200+</h2>
                        <p className="text-center text-xl font-semibold text-slate-200">Live class</p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 1, x: 0 }}
                        whileHover={{
                            scale: 1.2,
                            x: '-50px',
                            zIndex:100
                        }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            stiffness: 200
                        }}
                        className="backdrop-blur-md py-6 px-3 rounded-lg bg-blue-500/20 border-t-4 border-b-4 border-blue-200">
                        <h2 className="text-5xl text-center font-bold text-slate-100">10k+</h2>
                        <p className="text-center text-xl font-semibold text-slate-200">Students</p>
                    </motion.div>  

                    <motion.div
                        initial={{ scale: 1, x: 0 }}
                        whileHover={{
                            scale: 1.2,
                            x: '50px',
                            zIndex:100
                        }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            stiffness: 200
                        }}
                        className="backdrop-blur-md py-6 px-3 rounded-lg bg-blue-500/20 border-t-4 border-b-4 border-blue-200">
                        <h2 className="text-5xl text-center font-bold text-slate-100">4.8/5.0</h2>
                        <p className="text-center text-xl font-semibold text-slate-200">Average Ratings</p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 1, x: 0 }}
                        whileHover={{
                            scale: 1.2,
                            x: '-50px',
                            zIndex:100
                        }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            stiffness: 200
                        }}
                        className="backdrop-blur-md py-6 px-3 rounded-lg bg-blue-500/20 border-t-4 border-b-4 border-blue-200">
                        <h2 className="text-5xl text-center font-bold text-slate-100">2000+</h2>
                        <p className="text-center text-xl font-semibold text-slate-200">Students Professional awarded</p>
                    </motion.div>



                </div>


            </Container>
        </div>
    );
};

export default WhyChose;