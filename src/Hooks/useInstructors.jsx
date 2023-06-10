import { useQuery } from "@tanstack/react-query";


const useInstructors = () => {

    const {data:instructors=[], isLoading, refetch} = useQuery({
        queryKey: ['instructor'],
        queryFn: async()=>{
            const result = await fetch(`${import.meta.env.VITE_BASE_URL}/instructors`);
            return result.json();
        }
    })


    return [instructors, isLoading, refetch];
};

export default useInstructors;