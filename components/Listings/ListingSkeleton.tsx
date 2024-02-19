import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import ResponsiveGrid from "../shared/Grid";

type ListingsProps = {
  count: number[];
};
const ListingSkeleton = ({ count }: ListingsProps) => {
  return (
    <Stack>
      <ResponsiveGrid>
        {count.map((c) => (
          <Skeleton key={c} w={["100%"]} h={["400px"]} mb={2} />
        ))}
      </ResponsiveGrid>
    </Stack>
  );
};

export default ListingSkeleton;
