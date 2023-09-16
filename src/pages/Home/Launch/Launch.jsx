import { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import { BiTimeFive } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';


const Launch = () => {

    const [days, setDays] = useState(0);
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0)
    const [second, setSeconds] = useState(0)



    useEffect(() => {


        // calculate and update every second
        const interval = setInterval(() => {
            const currentDate = new Date();
            const launchDate = new Date("2024-5-20")

            // date calculation
            const totalTimeDifference = launchDate - currentDate;

            const lefDays = Math.floor(totalTimeDifference / (1000 * 60 * 60 * 24))
            const leftHour = Math.floor(totalTimeDifference / (1000 * 60 * 60) % 24)
            const leftMinutes = Math.floor((totalTimeDifference / (1000 * 60)) % 60);
            const leftSeconds = Math.floor((totalTimeDifference / 1000) % 60);

            setDays(lefDays);
            setHour(leftHour);
            setMinutes(leftMinutes);
            setSeconds(leftSeconds);

        }, 1000)

        // clean up the interval when the component unmounts
        return () => clearInterval(interval);

    }, [])



    return (
        <div className="launch-sec min-h-[60vh] my-12 py-24">
            <Container>
                <h2 className='text-4xl text-white font-bold text-center mb-2 '>Don&apos;t miss</h2>
                <h4 className="text-2xl text-center text-blue-50">
                    Our next launch date is coming soon.
                </h4>
                <div className="text-white flex justify-around my-8">
                    <div className="flex items-center">
                        <BiTimeFive className="text-4xl"></BiTimeFive>
                        <h4 className="text-2xl ml-2">20 May 2024</h4>
                    </div>
                    <div className="flex items-center">
                        <CiLocationOn className="text-4xl"></CiLocationOn>
                        <h4 className="text-2xl ml-2">Remote/ Online</h4>
                    </div>
                </div>


                <h3 className="text-blue-100 text-2xl md:text-4xl mt-20 text-center">Next event will launch in</h3>
                <div className="flex justify-center">
                    <div className="flex space-x-8 mb-10">

                        <div>
                            <h2 className="text-3xl md:text-6xl text-yellow-600 font-bold">{days}</h2>
                            <h3 className="text-white text-xl md:text-2xl">Days</h3>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-6xl text-yellow-600 font-bold">{hour}</h2>
                            <h3 className="text-white text-xl md:text-2xl">Hour</h3>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-6xl text-yellow-600 font-bold">{minutes}</h2>
                            <h3 className="text-white text-xl md:text-2xl">Minutes</h3>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-6xl text-yellow-600 font-bold">{second}</h2>
                            <h3 className="text-white text-xl md:text-2xl">Second</h3>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Launch;