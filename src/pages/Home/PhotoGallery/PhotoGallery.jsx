import Container from "../../../Components/Container";
import { motion } from "framer-motion"

// images 
import gallery from '../../../assets/gallery/classImage.jpg'
import gallery1 from '../../../assets/gallery/gallery.jpg'
import gallery2 from '../../../assets/gallery/gallery2.jpg'
import gallery3 from '../../../assets/gallery/gallery3.jpg'
import gallery4 from '../../../assets/gallery/gallery4.jpg'
import gallery5 from '../../../assets/gallery/gallery5.jpg'
import gallery6 from '../../../assets/gallery/gallery6.jpg'
import gallery7 from '../../../assets/gallery/gallery7.jpg'
import gallery8 from '../../../assets/gallery/gallery8.jpg'
import gallery9 from '../../../assets/gallery/gallery9.jpg'
import gallery0 from '../../../assets/gallery/gallery0.jpg'




const PhotoGallery = () => {
    return (
        <div className="my-12 bg-gradient-to-r  from-purple-500 to-red-400 py-20">
            <Container>
                <h2 className="text-4xl font-bold mb-10 text-center">Our Activities</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <motion.div
                        initial={{ y: '-10px' }}
                        whileHover={{boxShadow: "0px 0px 20px rgb(255 255 255)"}}
                        animate={{ y: '5px' }}
                        transition={{ type: 'spring', repeatType: "reverse", stiffness: 20, repeat: Infinity }}
                        className="row-span-2 col-span-2 flex items-center justify-center"><img className="w-full h-3/4" src={gallery} alt="gallery image" /></motion.div>
                    <motion.div
                       initial={{ y:'-5px' }}
                       animate={{ y:'5px' }}
                       whileHover={{boxShadow: "0px 0px 20px rgb(255 255 255)"}}
                       transition={{type:'spring', repeatType: "reverse", stiffness:20, repeat: Infinity }}
                        className="row-span-2"><img className="w-full h-full" src={gallery4} alt="gallery image" /></motion.div>
                    <motion.div
                       initial={{ y:'-10px' }}
                       animate={{ y:'5px' }}
                       whileHover={{boxShadow: "0px 0px 20px rgb(255 255 255)"}}
                       transition={{type:'spring', repeatType: "reverse", stiffness:20, repeat: Infinity }}
                    ><img className="w-full h-full" src={gallery1} alt="gallery image" /></motion.div>
                    <motion.div
                       initial={{ y:'-5px' }}
                       animate={{ y:'5px' }}
                       whileHover={{boxShadow: "0px 0px 20px rgb(255 255 255)"}}
                       transition={{type:'spring', repeatType: "reverse", stiffness:20, repeat: Infinity }}
                    ><img className="w-full h-full" src={gallery2} alt="gallery image" /></motion.div>
                    <motion.div
                       initial={{ y:'-5px' }}
                       animate={{ y:'5px' }}
                       whileHover={{boxShadow: "0px 0px 20px rgb(255 255 255)"}}
                       transition={{type:'spring', repeatType: "reverse", stiffness:20, repeat: Infinity }}
                    ><img className="w-full h-full" src={gallery3} alt="gallery image" /></motion.div>
                    <motion.div
                        initial={{ y:'-5px' }}
                        animate={{ y:'5px' }}
                        whileHover={{boxShadow: "0px 0px 20px rgb(255 255 255)"}}
                        transition={{type:'spring', repeatType: "reverse", stiffness:20, repeat: Infinity }}
                        className="row-span-2"><img className="w-full h-full" src={gallery5} alt="gallery image" /></motion.div>
                    <motion.div
                        initial={{ y:'-5px' }}
                        animate={{ y:'5px' }}
                        whileHover={{boxShadow: "0px 0px 20px rgb(255 255 255)"}}
                        transition={{type:'spring', repeatType: "reverse", stiffness:20, repeat: Infinity }}
                    ><img className="w-full h-full" src={gallery6} alt="gallery image" /></motion.div>
                    <motion.div
                        initial={{ y:'-5px' }}
                        animate={{ y:'5px' }}
                        whileHover={{boxShadow: "0px 0px 20px rgb(255 255 255)"}}
                        transition={{type:'spring', repeatType: "reverse", stiffness:20, repeat: Infinity }}
                    ><img className="w-full h-full" src={gallery7} alt="gallery image" /></motion.div>
                    <motion.div
                       initial={{ y:'-5px' }}
                       animate={{ y:'5px' }}
                       whileHover={{boxShadow: "0px 0px 20px rgb(255 255 255)"}}
                       transition={{type:'spring', repeatType: "reverse", stiffness:20, repeat: Infinity }}
                    ><img className="w-full h-full" src={gallery8} alt="gallery image" /></motion.div>
                    <motion.div
                       initial={{ y:'-5px' }}
                       animate={{ y:'5px' }}
                       whileHover={{boxShadow: "0px 0px 20px rgb(255 255 255)"}}
                       transition={{type:'spring', repeatType: "reverse", stiffness:20, repeat: Infinity }}
                    ><img className="w-full h-full" src={gallery9} alt="gallery image" /></motion.div>
                    <motion.div
                        initial={{ y:'-5px' }}
                        animate={{ y:'5px' }}
                        whileHover={{boxShadow: "0px 0px 20px rgb(255 255 255)"}}
                        transition={{type:'spring', repeatType: "reverse", stiffness:20, repeat: Infinity }}
                    ><img className="w-full h-full" src={gallery0} alt="gallery image" /></motion.div>
                </div>
            </Container>
        </div>
    );
};

export default PhotoGallery;