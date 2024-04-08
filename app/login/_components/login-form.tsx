"use client"

import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
    const [ loading, setLoading ] = useState(false);

    const loginHandle = () => {
        signIn("github")
    }

    return (
        <div>
            Login
            <button onClick={loginHandle}
            className={`${loading
                ? "cursor-not-allowed bg-stone-50 dark:bg-stone-800"
                : "bg-white hover:bg-stone-50 active:bg-stone-100 dark:bg-black dark:hover:border-white dark:hover:bg-black" }
                group my-2 flex h-10 w-full items-center justify-center space-x-2 rounded-md border border-stone-200 transition-colors duration-75 focus:outline-none dark:border-stone-700`}
            >
                Login with Github
            </button>
        </div>
    )
}

export default LoginForm
