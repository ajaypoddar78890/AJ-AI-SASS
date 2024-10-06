import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className=" flex items-center p-4">
      <Button>
        <Menu />
      </Button>
    </div>
  );
};

export default Navbar;
