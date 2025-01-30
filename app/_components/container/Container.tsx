import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 md:px-8",
        "max-w-container",
        className,
      )}
    >
      {children}
    </div>
  );
};
