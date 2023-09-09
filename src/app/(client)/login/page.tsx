"use client";

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { signIn, getCsrfToken } from "next-auth/react";
import styles from "./login.module.css";
import { useState } from "react";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";

export default function SignIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [loading, setLoading] = useState(false); // State to track loading state
  const [error, setError] = useState(false); // State to track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading to true when login starts

    // Use the signIn() function to handle authentication
    const result = await signIn("credentials", {
      redirect: false, // Set to true to redirect after successful login
      username: e.target.username.value,
      password: e.target.password.value,
      csrfToken: csrfToken,
    });

    // Handle the authentication result (success or error)
    if (result?.error) {
      // Handle authentication error
      console.error("Authentication failed:", result.error);
    } else {
      // Authentication successful, you can redirect or handle as needed
      console.log("Authentication successful");
      // Redirect to /admin/dashboard upon successful login
      window.location.href = "/admin/dashboard";
    }
  };

  return (
    <div className="containerAdjust">
      <div className={"containerSettings topSpace"}>
        {loading ? <LoadingAnimation /> : null}
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <p className={styles.formTitle}>Welcome back Admin</p>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div className={styles.inputContainer}>
              <input type="email" placeholder="Enter email" name="username" />
              <span></span>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
              />
            </div>
            <button type="submit" className={styles.submit}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
