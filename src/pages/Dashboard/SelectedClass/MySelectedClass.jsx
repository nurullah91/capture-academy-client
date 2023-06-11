import React from 'react';
import useSelected from '../../../Hooks/Student/useSelected';

const MySelectedClass = () => {
    
    // getting selected class using useSelected custom hook

    const [selectedClass, refetch] = useSelected();

    const totalPrice = selectedClass.reduce((sum, item)=>item.price + sum, 0)

    
    return (
        <div>
            <h3 className='text-4xl text-center font-bold'>Total Payable Amount: {totalPrice}</h3>
            
        </div>
    );
};

export default MySelectedClass;