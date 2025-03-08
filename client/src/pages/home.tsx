import { NavMenu } from "@/components/nav-menu";
import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";
import { TechStack } from "@/components/sections/tech-stack";
import { Contributions } from "@/components/sections/contributions";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative">
      <NavMenu />
      <main className="scroll-smooth">
        <Hero />
        <Portfolio />
        <TechStack />
        <Contributions />
        <Contact />
      </main>
    </div>
  );
}
