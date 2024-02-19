import { Grid } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const ResponsiveGrid = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
      mt={3}
      columnGap={5}
      rowGap={3}
    >
      {children}
    </Grid>
  );
};

export default ResponsiveGrid;
