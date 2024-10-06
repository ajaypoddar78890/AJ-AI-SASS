import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex items-center p-4">
      <Button variant={"ghost"} size={"icon"} className="md:hidden">
        <Menu />
      </Button>

      <div className="flex w-full justify-end">
        <Link href={"/"}>
          <UserButton />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
