import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecuredAxios from "./useSecuredAxios";

const useAdmin = () => {

    const {user, loading} = useAuth();
    const [securedAxios] = useSecuredAxios();

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ["isAdmin", user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await securedAxios.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    });



    return [isAdmin, isAdminLoading];
};

export default useAdmin;