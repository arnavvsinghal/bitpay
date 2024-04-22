import { AppbarClient } from "../../components/AppbarClient";
import { Sidebar } from "../../components/Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex flex-col h-screen">
      <AppbarClient />
      <div className="grow flex bg-bgprimary">
        <div className="w-1/5 flex flex-col justify-center border-r border-dashed border-texttertiary">
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  );
}
