declare module "react-responsive-masonry" {
  import * as React from "react";

  export function ResponsiveMasonry(props: {
    columnsCountBreakPoints?: Record<number, number>;
    children?: React.ReactNode;
  }): React.ReactElement;

  export function Masonry(props: {
    gutter?: string;
    children?: React.ReactNode;
  }): React.ReactElement;
}
