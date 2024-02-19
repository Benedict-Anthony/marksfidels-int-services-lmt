import { PropertiesDrawer } from "@/layouts/PropertiesDrawe";
import { Fragment, ReactNode } from "react";

export default function PropertiesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Fragment>
      <PropertiesDrawer />
      {children}
    </Fragment>
  );
}
