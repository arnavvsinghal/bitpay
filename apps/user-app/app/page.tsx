import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";
import { Center } from "@repo/ui/Center";
import { HorizontalScroll } from "../components/HorizontalScroll";
import { StatsCard } from "../components/StatsCard";
import { Boxes } from "../components/Box";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
      <Boxes hoverColor="bg-bgsecondary"/>
      <div className="h-screen bg-bgprimary">
        <Center>
          <div className="text-7xl text-textprimary z-10">Hi</div>
        </Center>
      </div>
      <HorizontalScroll />
      <StatsCard />
    </div>
  );
}
