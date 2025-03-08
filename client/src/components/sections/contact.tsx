import { Button } from "@/components/ui/button";
import { SectionHeading } from "../ui/section-heading";
import { FiGithub, FiTwitter } from "react-icons/fi";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-3xl w-full">
        <SectionHeading>Get in touch</SectionHeading>

        <div className="space-y-6 md:space-y-8">
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/tomodakengo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiGithub className="h-6 w-6 md:h-8 md:w-8" />
            </a>
            <a
              href="https://x.com/oln_t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiTwitter className="h-6 w-6 md:h-8 md:w-8" />
            </a>
          </div>

          <div className="text-center md:text-left">
            <a
              href="https://forms.gle/pA99Cep6mzy5tFoH9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full md:w-auto">
                Contact Form
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}