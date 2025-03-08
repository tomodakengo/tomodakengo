interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
      {children}
    </h2>
  );
}
