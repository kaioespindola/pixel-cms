'use client';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

export default function LoginForm() {

    const router = useRouter();
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();

        const response = await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            redirect: false,
        });

        if (!response?.error) {
            router.push('/');
            router.refresh();
        } else {
            response.status === 401
            ? setError('Your email or password is incorrect')
            : null;
        }
    };

    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            {error && <p>{error}</p>}
            <form onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter your Password"
                    name="password"
                    value={formData.password}
                    required
                    onChange={handleInputChange}
                />
                <button>
                    Submit
                </button>
            </form>
            <div>
                <Link
                href="/request-reset-password"
                >
                Forgot password?
                </Link>
            </div>
        </>
    );
}