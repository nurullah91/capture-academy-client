import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth";
import useSecuredAxios from "../useSecuredAxios";

const useSelected = () => {

    const {user, loading} = useAuth();

    const [securedAxios] = useSecuredAxios();

    const {data: selectedClass=[], refetch} = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await securedAxios(`/selected-class?email=${user?.email}`)
            return res.data;
        },
    })



    return [selectedClass, refetch];
};

export default useSelected;