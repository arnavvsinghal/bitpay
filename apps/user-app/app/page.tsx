import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";
import { HorizontalScroll } from "../components/HorizontalScroll";
import { Boxes } from "../components/Box";
import StickyScroll from "../components/StickyScroll";
import PageHeading from "../components/PageHeading";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/dashboard")
  }
  return (
    <div>
      <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center bg-bgprimary">
        <Boxes />
        <PageHeading />
      </div>
      <HorizontalScroll />
      <StickyScroll />
    </div>
  );
}
