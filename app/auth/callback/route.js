import { NextRequest, NextResponse } from "next/server";
import { createAdminClient, createSessionClient } from "@/lib/appwrite"
import { cookies } from "next/headers";

export async function GET(request) {
    const url = new URL(request.url)

    const secret = url.searchParams.get('secret')
    const userId = url.searchParams.get('userId')

    const account = await createAdminClient()

    const session = await account.createSession(
        userId,
        secret
    )

    const cookieStore = cookies()

    cookieStore.set('session', session.secret, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/'
    })

    return Response.redirect('http://localhost:3000')
}