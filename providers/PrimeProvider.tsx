"use client";
import React, { ReactNode } from "react";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

const PrimeProvider = ({ children }: { children: ReactNode }) => {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
};

export default PrimeProvider;
