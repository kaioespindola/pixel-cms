import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const Navbar = () => {
    return(
        <div className="flex items-center justify-between p-6 border-b-2 border-slate-200">
            <Avatar>
                <AvatarImage src="https://github.com/kaioespindola.png" />
                <AvatarFallback>KE</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Navbar;
