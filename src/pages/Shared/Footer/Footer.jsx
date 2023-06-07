import { Link } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <img src="https://i.ibb.co/gWk7nBN/Black-Yellow-White-Modern-Studio-Photo-Logo-1-removebg-preview-1.png" alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <span className="text-3xl"><Link><FaFacebook></FaFacebook></Link></span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;