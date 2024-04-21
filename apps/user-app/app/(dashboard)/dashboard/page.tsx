"use client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function () {
  const session = useSession();
  // if (!session.data?.user) {
  //   redirect("/");
  // }
  return (
    <div className="">
      <div>Dashboard</div>
      <button onClick={async () => await signOut({ callbackUrl: "/" })}>
        {session.data?.user?.email}
      </button>
    </div>
  );
}
