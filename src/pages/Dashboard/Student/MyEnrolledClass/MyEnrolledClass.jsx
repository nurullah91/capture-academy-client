
import { useEffect, useState } from "react";
import useSecuredAxios from "../../../../Hooks/useSecuredAxios";

const MyEnrolledClass = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [securedAxios] = useSecuredAxios();

    useEffect(() => {
        securedAxios.get("/payments")
            .then(data => {
                setPaymentHistory(data.data);
            })
    }, [securedAxios])


    return (
        <div>

            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-cyan-600 font-bold text-xl">#</th>
                            <th className="text-cyan-600 font-bold text-xl">Classes</th>
                            <th className="text-cyan-600 font-bold text-xl text-right">Price</th>
                            <th className="text-cyan-600 font-bold text-xl text-center">Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td><ul>
                                    {
                                        payment.className?.map((item, index) => <li key={index}>{item}</li>)
                                    }

                                </ul></td>
                                <td className="text-right">{payment.price}</td>
                                <td className="text-center text-cyan-600">{payment.transactionId}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClass;