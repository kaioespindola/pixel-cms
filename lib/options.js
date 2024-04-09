import CredentialsProvider from 'next-auth/providers/credentials';
import { Session } from 'next-auth';
import directus from '@/lib/auth';
import { readMe, withToken } from '@directus/sdk';
import { JWT } from 'next-auth/jwt';

export const options = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const res = await fetch('https://api.meupixel.com.br/auth/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();
        // If no error and we have user data, return it

        const { id, first_name, last_name } = await directus.request(
            withToken(
              user.data.access_token,
              readMe({
                fields: ['id', 'first_name', 'last_name'],
              })
            )
        );

        user.id = id
        user.name = `${first_name} ${last_name}`
        user.email = credentials.email

        if (!res.ok && user) {
          throw new Error('Email address or password is invalid');
        }
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({token, user, account }) {
      if (account && user) {
        const userData = await directus.request(
          withToken(
            user.data.access_token,
            readMe({
              fields: ['id', 'first_name', 'last_name'],
            })
          )
        );
        return {
          ...token,
          accessToken: user.data.access_token,
          refreshToken: user.data.refresh_token,
          user: userData,
        };
      }
      return token;
    },
    async session({ session, token }) {
        console.log(session)
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.id = token.user.id;
      session.user.name = `${token.user.first_name} ${token.user.last_name}`;
      return session;
    },
  },
};
