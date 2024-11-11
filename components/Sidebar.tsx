import {
  Code2,
  ImagesIcon,
  LayoutDashboard,
  MessagesSquare,
  Music,
  Settings,
  VideotapeIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashbord",
    color: "text-pink-400", // Icon color
  },
  {
    label: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-violet-500", // Icon color
  },
  {
    label: "object identifier",
    icon: ImagesIcon,
    href: "/image",
    color: "text-yellow-500", // Icon color
  },
  {
    label: "Video Generation",
    icon: VideotapeIcon,
    href: "/video",
    color: "text-orange-500", // Icon color
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-green-500", // Icon color
  },
  {
    label: "Code  Generation",
    icon: Code2,
    href: "/code",
    color: "text-gray-500", // Icon color
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/setting",
    color: "text-red-500", // Icon color
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white">
      <div className="px-3 py-2 flex-1 ">
        <Link className="" href={"/"}>
          <h3 className="md:text-2xl font-semibold pl-3 pb-5">AJ-AI</h3>
        </Link>
        <div className="space-y-3">
          {routes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer"
            >
              <div className="flex items-center flex-1">
                {/* Apply color only to the icon */}
                <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
