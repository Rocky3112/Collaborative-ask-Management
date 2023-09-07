/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div className="p-28 text-center bg-slate-300">
            <h2 className=" text-3xl py-5">This is the user's profile</h2>
            <div className=" flex justify-center items-center gap-10">
                <div>
                    <img className=" h-72 rounded-lg" src={user.photoURL} />
                </div>
                <div className="text-xl font-extrabold">
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                </div>
            </div>
            {/* Add more properties as needed */}
        </div>
    );
};

export default Profile;
