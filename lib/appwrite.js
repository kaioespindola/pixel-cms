"use server"

import { Client, Account } from "node-appwrite";
import { cookies } from "next/headers";

export const createAdminClient = async () => {

    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
        .setKey(process.env.NEXT_APPWRITE_KEY)

        const account =  new Account(client)

        return account
}

export const createSessionClient = async () => {

    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)

    const session = cookies().get("session");

    if(session) {
        client.setSession(session.value)
    }

    const account = new Account(client)

    return account
}