import { ModelIcon } from "@/components/icons/model-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import { Space_Mono } from "next/font/google";
import Link from "next/link";

const spaceMono = Space_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export function Nav() {
  return (
    <div className="h-14 py-2 px-2 md:px-8 border-b flex items-center">
      <div className="flex flex-1 items-center">
        <Link href="/">
          <h1 className={cn("font-light text-xl", spaceMono.className)}>
            <span className="text-pink-700">Jabir</span>
            <span>⚡️</span>
            <span>Teach</span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-none items-center space-x-4">
        <ThemeToggle />
        <Button size="sm" asChild>
          <Link
            href="https://github.com/Jabir7006/next-js-text-to-image-generator"
            className="flex flex-row space-x-2 items-center"
            target="_blank"
          >
            <GithubIcon className="h-5 w-5" />
            <span>
              <span className="hidden md:inline-block">Fork on</span> GitHub
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
