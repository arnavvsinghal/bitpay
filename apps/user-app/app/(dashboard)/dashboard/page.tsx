"use client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function () {
  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/")
    },
  })
  console.log(data);
  return (
    <div className="">
      <div>Dashboard</div>
      <button onClick={async () => await signOut({ callbackUrl: "/" })}>
        {data?.user?.email}
      </button>
    </div>
  );
}
