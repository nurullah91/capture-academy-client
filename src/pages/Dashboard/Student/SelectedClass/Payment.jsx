import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelected from "../../../../Hooks/Student/useSelected";

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);

const Payment = () => {
    const [selectedClass] = useSelected();
    const total = selectedClass.reduce( (sum, item)=> sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div className="w-full">
            <h2 className="text-2xl  font-bold text-center text-orange-500 mt-10">Please Pay ${price}</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;