import Image from "next/image";
import LoginForm from "./_components/login-form";

const Login = () => {
    return(
        <div className="container mx-auto h-screen">
            <div className="flex h-screen items-center justify-center">
                <div className="w-full grid grid-cols-2 gap-4 border rounded">

                    <div className="flex bg-slate-900 text-slate-50 rounded-l rounded-bl p-4">
                        <Image
                            src="/images/logo.svg"
                            alt="Logo"
                            width={48}
                            height={48}
                        />
                    </div>

                    <div className="flex p-4">
                        <LoginForm />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;
