"use client"

import Link from "next/link";
import { FormEvent, useState, router } from "react";

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });

    const isFullForm = true

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/auth/register`, {
          method: 'POST',
          body: JSON.stringify({
            ...formData,
          }),
        });
        if (response.status === 201) {
          router.push('/');
          router.refresh();
        } else {
          response.status === 409
            ? setError('A user with this email already exist')
            : null;
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            Login
            <form onSubmit={handleFormSubmit}>
                {isFullForm && (
                    <>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            required
                        />
                    </>
                )}
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
        </div>
    );
}

export default RegisterForm;
