import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SectionHeading } from "../ui/section-heading";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "TestRoad",
    url: "https://github.com/tomodakengo/testroad",
    description: "A testing automation tool",
  },
  {
    title: "NoCode Playwright",
    url: "https://github.com/tomodakengo/nocode-playwright",
    description: "No-code solution for Playwright testing",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-3xl w-full">
        <SectionHeading>Portfolio</SectionHeading>
        <div className="grid gap-4 md:gap-6">
          {projects.map((project) => (
            <Card key={project.url} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <FiGithub className="h-5 w-5" />
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:underline mt-2 inline-block text-sm md:text-base"
                >
                  View Project →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}