import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const Navbar = () => {
    return(
        <div className="flex items-center justify-between p-6 border-b-2 border-slate-200">
            Navbar
            <Avatar>
                <AvatarImage src="https://github.com/kaioespindola.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Navbar;
