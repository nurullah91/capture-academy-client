import usePopularClasses from "../../../Hooks/usePopularClasses";

const PopularClasses = () => {
    const [popularClass] = usePopularClasses();

    return (
        <div>
            <h3 className="text-center text-5xl">Popular class: {popularClass.length}</h3>
        </div>
    );
};

export default PopularClasses;