// components/ui/container.tsx
import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
