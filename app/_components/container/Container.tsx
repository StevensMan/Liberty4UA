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
        "xs:px-6 mx-auto w-full px-4 md:px-8",
        "xs:max-w-[640px] max-w-[320px] md:max-w-container",
        className,
      )}
    >
      {children}
    </div>
  );
};
