import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "../../components/landingpage/header";
import Hero from "../../components/landingpage/Hero";
import HoverCard from "@/components/landingpage/hover-cards"
 

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HoverCard/>
     

      <Link href="/sign-in">
        <Button>sign-in</Button>
      </Link>
      <Link href="/sign-up ">
        <Button>sign-up</Button>
      </Link>
    </div>
  );
}
