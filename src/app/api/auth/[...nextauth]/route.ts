import { FirestoreAdapter } from "@auth/firebase-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { cert } from "firebase-admin/app";
import { Adapter } from "next-auth/adapters";
import { auth } from "@/utils/firebase";

export const authOptions: NextAuthOptions = {
  // adapter: FirebaseAdapter(app),
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    }),
  }) as Adapter,
  // Configure one or more authentication providers
  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "helloworld@mail.fr",
        },
        password: { label: "Password", type: "password" },
      },
      // async authorize(credentials, req) {
      //   const { username, password } = credentials as any;
      //   const res = await fetch("http://localhost:3000/auth/login", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ username, password }),
      //   });

      //   const user = await res.json();

      //   if (res.ok && user) {
      //     return user;
      //   } else return null;
      // },
      async authorize(credentials) {
        try {
          // Sign in with email and password using Firebase
          const userCredential = await signInWithEmailAndPassword(
            auth,
            (credentials as any).username,
            (credentials as any).password
          );

          // If the login is successful, return the user object.
          if (userCredential.user) {
            return userCredential.user;

            // return {
            //   id: userCredential.user.uid,
            //   email: userCredential.user.email, // Use email as username for simplicity
            //   // Add other user data as needed
            // };
          } else {
            // If login fails, return null.
            return null;
          }
        } catch (error) {
          // If there's an error (e.g., invalid credentials), return null.
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
