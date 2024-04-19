import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";
import { Center } from "@repo/ui/Center";
import { HorizontalScroll } from "../components/HorizontalScroll";
import { Boxes } from "../components/Box";
import StickyScroll from "../components/StickyScroll";

export default async function Page() {
  // const session = await getServerSession(authOptions);
  // console.log(session);
  // if (session) {
  //   redirect("/dashboard");
  // }
  return (
    <div>
      <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center bg-bgprimary">
        <Boxes />
        <div className="text-8xl py-4 text-textprimary z-10">BitPay</div>
        <div className="text-2xl py-4 text-texttertiary z-10">
          Revolutionizing digital transactions, one bit at a time.
        </div>
      </div>
      <HorizontalScroll />
      <StickyScroll />
    </div>
  );
}
