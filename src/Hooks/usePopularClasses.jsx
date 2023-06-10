import { useQuery } from "@tanstack/react-query";



const usePopularClasses = () => {
const {data: popularClasses=[], isLoading, refetch} = useQuery({
    queryKey:['popularClasses'],
    queryFn: async()=>{
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/classes/popular`);
        return res.json();
    }
})


    return [popularClasses, isLoading, refetch]
};

export default usePopularClasses;