import MobileSidebar from "./mobile-sidebar";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex items-center p-4">
      <MobileSidebar />

      <div className="flex w-full justify-end">
        <Link href={"/"}>
          <UserButton />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
