"use client"

import { Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

import { redirect, useRouter } from 'next/navigation';

const GithubLogin = () => {

    const router = useRouter()

    const handleLogin = async () => {
        const data = await fetch('/auth/register', {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        const {token} = await data.json()

         router.push(token)

    }

    return (
        <Button className="w-full flex gap-2" variant={'outline'} onClick={handleLogin}>
            <Github size={16} /> Login com Github
        </Button>
    );
};

export default GithubLogin