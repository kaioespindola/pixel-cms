import Navbar from "@/components/ui/navbar"
import Sidebar from "@/components/ui/sidebar"
import { createSessionClient } from "@/lib/appwrite"

const Home = async () => {

    const account = await createSessionClient()

    const user = await account.get()

    console.log(user)

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div className="p-6">
                    Homepage aqui: {user?.name} | {user?.email}
                </div>
            </div>
        </div>
    )
}

export default Home
