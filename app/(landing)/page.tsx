import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50n text-4xl text-red-400
     "
    >
      <h1>landing page unprotected</h1>
      <Link href="/sign-in">
        <Button>sign-in</Button>
      </Link>
      <Link href="/sign-up ">
        <Button>sign-up</Button>
      </Link>
    </div>
  );
}
