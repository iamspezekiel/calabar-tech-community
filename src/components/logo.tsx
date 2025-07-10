import Image from 'next/image';

export function Logo({ className, ...props }: React.ComponentProps<typeof Image>) {
  return (
    <Image
      src="https://iili.io/FEu3ivV.png"
      alt="Calabar Tech Community Logo"
      width={100}
      height={100}
      className={className}
      {...props}
    />
  );
}
