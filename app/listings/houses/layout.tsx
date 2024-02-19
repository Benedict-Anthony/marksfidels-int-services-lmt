import { HouseDrawer } from "@/layouts/HousesLayout";
import { Metadata } from "next";
import { Fragment, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Houses | MarksFidels",
};
export default function HouseLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <HouseDrawer />
      {children}
    </Fragment>
  );
}
