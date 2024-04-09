import Navbar from "@/components/ui/navbar"
import Sidebar from "@/components/ui/sidebar"

import { getServerSession } from "next-auth"
import { options } from "@/lib/options"

const Home = async () => {

    const session = await getServerSession(options)
    const user = session?.user

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div className="p-6">
                    Homepage aqui: {user && user.email} | {user && user.name}
                </div>
            </div>
        </div>
    )
}

export default Home
