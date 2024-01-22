import React, { ReactNode } from "react";
import { Ripple } from "primereact/ripple";

export default function RippleEffect({ children }: { children: ReactNode }) {
  return (
    <div className="card flex justify-content-center align-items-center">
      <div className="bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold p-ripple">
        hello
        <Ripple />
      </div>
    </div>
  );
}
