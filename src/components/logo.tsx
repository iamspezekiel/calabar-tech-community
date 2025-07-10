import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("text-primary", className)}
      {...props}
      aria-label="Calabar Tech Community Logo"
    >
      <g fill="currentColor">
        <rect width="100" height="100" rx="20" fill="hsl(var(--accent))" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="50"
          fontWeight="bold"
          fill="hsl(var(--accent-foreground))"
          className="font-headline"
        >
          CTC
        </text>
      </g>
    </svg>
  );
}
