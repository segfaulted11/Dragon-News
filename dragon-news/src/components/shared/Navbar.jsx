import { UserCircle2Icon } from "lucide-react";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between container mx-auto my-4">
           
           <div></div>
           <ul className="flex gap-3">
            <li>
                <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink href={"/about-us"}>About Us</NavLink>
            </li>
            <li>
                <NavLink href={"/career"}>Career</NavLink>
            </li>
           </ul>
           <div className="flex items-center gap-3">
            <UserCircle2Icon/>
            <Link href={`/login`}
            >
            <button className="btn btn-error">LogIn</button>
            </Link>
           </div>
        </div>
    );
};

export default Navbar;