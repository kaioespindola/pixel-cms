import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Components
import Navbar from "@/components/ui/navbar"
import Sidebar from "@/components/ui/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Pixel CMS",
    description: "Content Management Realtime System - Pixel Torto",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <div className="container mx-auto flex">
                    <Sidebar />

                    <div className="w-full">
                        <Navbar />
                        <div className="p-6">
                            {children}
                        </div>
                    </div>

                </div>

            </body>
        </html>
    )
}
