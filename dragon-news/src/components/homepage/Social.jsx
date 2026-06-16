import { FaGithub, FaGoogle } from "react-icons/fa6";
const Social = () => {
    return (
        <div className="bg-purple-300 col-span-3 flex flex-col gap-4">
            <h2 className="font-bold text-center">LogIn With</h2>
            <button className="btn btn-error">
                <FaGoogle />
                Login With Google
            </button>
            <button className="btn btn-error">
                <FaGithub />

                Login With Github
            </button>
        </div>
    );
};

export default Social;