import Navbar from "@/components/ui/navbar"
import Sidebar from "@/components/ui/sidebar"

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div className="p-6">
                    Dashboard
                </div>
            </div>
        </div>
    )
}

export default Home
