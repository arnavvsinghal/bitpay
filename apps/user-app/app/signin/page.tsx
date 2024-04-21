"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export default function () {
  const session = useSession();
  if (session.data?.user) {
    redirect("/dashboard");
  }

  return (
    <div>
      <div className="h-40 text-red-700">{session.data?.user?.email}</div>
      <button
        onClick={() => {
          signIn("google", { callbackUrl: "/dashboard" });
        }}
      >
        Login with google
      </button>
    </div>
  );
}
