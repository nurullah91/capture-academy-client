import Marquee from "react-fast-marquee";

import award from "../../../assets/awards/award.jpg"
import award1 from "../../../assets/awards/award1.jpg"
import award2 from "../../../assets/awards/award2.jpg"
import award3 from "../../../assets/awards/award3.jpg"
import award4 from "../../../assets/awards/award4.jpg"
import award5 from "../../../assets/awards/award5.jpg"
import award6 from "../../../assets/awards/award6.jpg"
import award7 from "../../../assets/awards/award7.jpg"



const Award = () => {
  return (
    <div>
  
        <h2 className="text-4xl font-bold mb-10 text-center ">Our Achievement</h2>

        <div>
          <Marquee pauseOnClick={true}>
              <div className="mx-3 rounded-tl-3xl rounded-br-3xl"><img className="rounded-tl-3xl rounded-br-3xl" src={award} alt="award image" /></div>
              <div className="mx-3 rounded-tl-3xl rounded-br-3xl"><img className="rounded-tl-3xl rounded-br-3xl" src={award1} alt="award image" /></div>
              <div className="mx-3 rounded-tl-3xl rounded-br-3xl"><img className="rounded-tl-3xl rounded-br-3xl" src={award2} alt="award image" /></div>
              <div className="mx-3 rounded-tl-3xl rounded-br-3xl"><img className="rounded-tl-3xl rounded-br-3xl" src={award3} alt="award image" /></div>
              <div className="mx-3 rounded-tl-3xl rounded-br-3xl"><img className="rounded-tl-3xl rounded-br-3xl" src={award4} alt="award image" /></div>
              <div className="mx-3 rounded-tl-3xl rounded-br-3xl"><img className="rounded-tl-3xl rounded-br-3xl" src={award5} alt="award image" /></div>
              <div className="mx-3 rounded-tl-3xl rounded-br-3xl"><img className="rounded-tl-3xl rounded-br-3xl" src={award6} alt="award image" /></div>
              <div className="mx-3 rounded-tl-3xl rounded-br-3xl"><img className="rounded-tl-3xl rounded-br-3xl" src={award7} alt="award image" /></div>
          </Marquee>
        </div>
     
    </div>
  );
};

export default Award;