import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth";
import useSecuredAxios from "../useSecuredAxios";

const useMyClasses = () => {

    const {user, loading} = useAuth();

    const [securedAxios] = useSecuredAxios();

    const {data: allMyClasses=[], refetch} = useQuery({
        queryKey: ['allMyClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await securedAxios(`/my-classes?email=${user?.email}`)
            return res.data;
        },
    })



    return [allMyClasses, refetch];
};

export default useMyClasses;