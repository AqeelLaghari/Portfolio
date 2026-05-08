import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center mb-12", className)} {...props}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
        <span className="block h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mt-4 rounded-full" />
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
