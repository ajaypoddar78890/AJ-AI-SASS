"use client";

import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CodeIcon,
  FileMusic,
  ImageDownIcon,
  MessageSquare,
  VideoOffIcon,
} from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Object Identifier",
    icon: ImageDownIcon,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoOffIcon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/video",
  },
  {
    label: "Music",
    icon: FileMusic,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
    href: "/code",
  },
];

const Page = () => {
  const router = useRouter(); // Call useRouter function here

  return (
    <div>
      <div className="mb-5 space-y-4">
        <h3 className="text-2xl md:text-4xl text-center font-bold">
          Explore The Power Of AI
        </h3>
        <p className="text-md md:text-lg text-center text-gray-600 font-medium leading-2">
          <span className="font-bold text-pink-600 pr-2">
            {" "}
            Five AI Models, One Platform:{" "}
          </span>
          Conversations, Code, Images, Videos, and Music at Your Fingertips
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4 md:pb-16">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)} // Use router.push here
            key={tool.href}
            className={`p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer group`}
          >
            <div className="flex items-center gap-x-4">
              <div className={`p-2 w-fit rounded-md ${tool.bgColor}`}>
                <tool.icon className={`h-6 w-6 ${tool.color}`} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>

            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:rotate-[-35deg] hover:scale-125" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
