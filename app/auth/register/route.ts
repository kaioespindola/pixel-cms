import { createAdminClient } from "@/lib/appwrite"

export async function POST(request: Request) {

    const account = await createAdminClient()

    const token = await account.createOAuth2Token(
        'github',
        'http://localhost:3000/auth/callback',
        'http://localhost:3000/login'
    )

    return Response.json({ token })
}

