import { useLoaderData } from "react-router-dom";

const AllTask = () => {
    const allTask = useLoaderData();
    console.log(allTask);
    return (
        <div>
            
        </div>
    );
};

export default AllTask;