
import Image from "next/image";
import { LayoutDashboard, Settings, CircleUserRound   } from 'lucide-react';

const SidebardIconCard = ({ children }: any) => {
    return(
        <div className='hover:bg-slate-100 w-full flex p-2 items-center justify-center rounded-lg cursor-pointer'>
            {children}
        </div>
    )
}

const Sidebard = () => {
    return(
        <div className="h-screen flex flex-col items-center gap-1 p-2 border-r-2 border-slate-200">

            <Image
                src="/images/logo.svg"
                alt="Logo"
                width={48}
                height={48}
            />

            <SidebardIconCard>
                <LayoutDashboard size={24} />
            </SidebardIconCard>

            <SidebardIconCard>
                <Settings size={24} />
            </SidebardIconCard>

            <SidebardIconCard>
                <CircleUserRound size={24} />
            </SidebardIconCard>

        </div>
    )
}

export default Sidebard;
