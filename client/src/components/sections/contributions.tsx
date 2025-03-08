import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "../ui/section-heading";
import { FiGithub } from "react-icons/fi";

const contributions = [
  {
    title: "docs(appium): Translated the migration guide to Appium2 into Japanese",
    url: "https://github.com/appium/appium/pull/20746",
    tags: ["appium", "document translation"],
  },
];

export function Contributions() {
  return (
    <section id="contributions" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl w-full">
        <SectionHeading>Contributions</SectionHeading>
        <div className="grid gap-6">
          {contributions.map((contribution) => (
            <Card key={contribution.url}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FiGithub className="h-5 w-5" />
                  {contribution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {contribution.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={contribution.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:underline"
                >
                  View Contribution →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
