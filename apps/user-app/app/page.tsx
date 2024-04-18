import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";
import { Center } from "@repo/ui/Center";
import { HorizontalScroll } from "../components/HorizontalScroll";
import { Boxes } from "../components/Box";
import StickyScroll from "../components/StickyScroll";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
      <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg bg-bgprimary">
        <Boxes />
        <Center>
          <div className="text-7xl text-textprimary z-10">Hi</div>
        </Center>
      </div>
      <HorizontalScroll />
      <StickyScroll />
    </div>
  );
}
