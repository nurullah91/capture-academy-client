import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebook, FaLinkedin, FaLocationArrow, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
    return (
        <div className="bg-neutral text-neutral-content">
            <footer className="footer p-10 ">
                <div>
                    <img className="h-24 w-24" src="https://i.ibb.co/gWk7nBN/Black-Yellow-White-Modern-Studio-Photo-Logo-1-removebg-preview-1.png" alt="" />
                    <p className="font-bold">Capture Academy<br />Teaching reliable Skills On Photography since 2023</p>
                </div>
                    <div>
                        <span className="footer-title">Contact Us</span>
                        <p className="flex items-center"><FaEnvelope className="mr-3"></FaEnvelope> captureacademy@sample.com</p>

                        <p className="flex items-center"><FaPhone className="mr-3"></FaPhone> 0179668991</p>
                        <p className="flex items-center"><FaSearchLocation className="mr-3"></FaSearchLocation> Barishal, Bangladesh</p>

                    </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <span className="text-3xl"><Link><FaFacebook></FaFacebook></Link></span>
                        <span className="text-3xl"><Link><FaTwitter></FaTwitter></Link></span>
                        <span className="text-3xl"><Link><FaLinkedin></FaLinkedin></Link></span>
                        <span className="text-3xl"><Link><FcGoogle></FcGoogle></Link></span>
                    </div>
                </div>
                                
                                 
            </footer>
            <h2 className="text-center pb-10 pt-5 border-t-2">All rights deserve Capture Academy @2023</h2>
        </div>
    );
};

export default Footer;