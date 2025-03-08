import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "../ui/section-heading";

const technologies = [
  "Ranorex",
  "Playwright",
  "TestRail",
  "Docker",
  "Django",
  "NextJS",
  "Laravel",
  "runn",
];

export function TechStack() {
  return (
    <section id="tech-stack" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl w-full">
        <SectionHeading>Tech Stack</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-base py-2 px-4"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
