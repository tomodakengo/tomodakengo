import { Button } from "@/components/ui/button";
import { SectionHeading } from "../ui/section-heading";
import { FiGithub, FiTwitter } from "react-icons/fi";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl w-full">
        <SectionHeading>Get in touch</SectionHeading>
        
        <div className="space-y-8">
          <div className="flex gap-4">
            <a
              href="https://github.com/tomodakengo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiGithub className="h-8 w-8" />
            </a>
            <a
              href="https://x.com/oln_t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiTwitter className="h-8 w-8" />
            </a>
          </div>

          <div>
            <a
              href="https://forms.gle/pA99Cep6mzy5tFoH9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Contact Form
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
