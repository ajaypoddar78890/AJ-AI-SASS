import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4  flex flex-col h-full bg-black  text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashbord"}>AJ -AI</Link>
      </div>
    </div>
  );
};

export default Sidebar;
