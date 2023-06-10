import { useQuery } from "@tanstack/react-query";



const useClasses = () => {
const {data: classes=[], isLoading, refetch} = useQuery({
    queryKey:['classes'],
    queryFn: async()=>{
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/classes`);
        return res.json();
    }
})


    return [classes, isLoading, refetch]
};

export default useClasses;