import React from "react";
import { ProgressSpinner as PSpinner } from "primereact/progressspinner";

export default function ProgressSpinner() {
  return (
    <div className="card">
      <PSpinner
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "transparent",
        }}
        strokeWidth="4"
        // fill="var(--surface-ground)"
        animationDuration=".5s"
      />
    </div>
  );
}
