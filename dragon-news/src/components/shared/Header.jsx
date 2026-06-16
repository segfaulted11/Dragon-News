import haederImg from "@/app/assets/logo.png"
import Image from "next/image";
import { format, compareAsc } from "date-fns";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-6 gap-2">
           <Image src={haederImg} alt="logo" width={300} height={200}></Image>
           <p>Journalism Without Fear or Favour</p>
           {
            format(new Date(), "EEEE, LLLL dd, yyyy")
           }
        </div>
    );
};

export default Header;