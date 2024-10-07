import { LucideIcon } from "lucide-react";
import React from "react";

// Define the prop types for the Heading component
interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
      <div className="p-2 w-fit rounded-md bg-violet-600/10">
        <Icon className="w-10 h-10 text-violet-800 " />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
