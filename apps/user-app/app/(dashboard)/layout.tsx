import { Sidebar } from "../../components/Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex bg-bgprimary">
      <div className="w-1/5 flex flex-col justify-center border-r border-texttertiary h-screen">
        <Sidebar />
      </div>
      {children}
    </div>
  );
}
