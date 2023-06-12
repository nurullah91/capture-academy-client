
import { useEffect, useState } from "react";
import useSecuredAxios from "../../../../Hooks/useSecuredAxios";

const MyEnrolledClass = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [securedAxios] = useSecuredAxios();

    useEffect( ()=>{
        securedAxios.get("/payments")
        .then(data=>{
            setPaymentHistory(data.data);
        })
    },[securedAxios])


    return (
        <div>
            My enrolled class {paymentHistory.length}
        </div>
    );
};

export default MyEnrolledClass;