import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecuredAxios from "./useSecuredAxios";

const useInstructor = () => {

    const {user, loading} = useAuth();
    const [securedAxios] = useSecuredAxios();

    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ["Instructor", user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await securedAxios.get(`/users/instructor/${user?.email}`);
            return res.data.Instructor;
        }
    });



    return [isInstructor, isInstructorLoading];
};

export default useInstructor;