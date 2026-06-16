import haederImg from "@/app/assets/logo.png"
import Image from "next/image";
import { format, compareAsc } from "date-fns";
import Link from "next/link";


const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-6 gap-2">
            <Link href="/" className="hover:cursor-pointer">
                <Image src={haederImg} alt="logo" width={300} height={200}></Image>
            </Link>

            <p>Journalism Without Fear or Favour</p>
            {
                format(new Date(), "EEEE, LLLL dd, yyyy")
            }
        </div>
    );
};

export default Header;