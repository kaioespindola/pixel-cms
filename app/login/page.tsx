import Image from "next/image"

// Icons
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GithubLogin from "./components/github-login";

const Login = () => {
    return (
        <div className="grid grid-cols-2  h-screen">
            <div className="flex flex-col items-center justify-center bg-violet-600">
                <Image
                    src="/images/logo-branca.svg"
                    alt="login"
                    width={262}
                    height={64}
                />
            </div>
            <div className="w-full flex flex-col gap-4 items-center justify-center">

                <div className="w-96 flex items-center flex-col gap-4">

                    <GithubLogin />

                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <Button className="w-full">
                        Login
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login