"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import ResponsiveGrid from "../shared/Grid";
import HouseCard from "./HouseCard";
import { useQuery } from "react-query";
import { fetchHouses } from "@/lib/fetchHouses";
import { getHouses } from "@/features/houseSlice";
import ListingSkeleton from "./ListingSkeleton";
import Search from "./Search";
const SkeletonCount = [1, 2, 3, 4, 5, 6];
const Houses = () => {
  const { results } = useAppSelector((state) => state.house);
  const dispacth = useAppDispatch();
  useQuery({
    queryKey: "houses",
    queryFn: fetchHouses,
    onSuccess: (data) => {
      if (results.length === 0) {
        dispacth(getHouses(data));
      }
    },
  });

  if (results.length === 0) {
    return <ListingSkeleton count={SkeletonCount} />;
  }
  return (
    <Stack>
      <Search />
      <ResponsiveGrid>
        {results.map((item) => (
          <GridItem key={item.id}>
            <HouseCard {...item} />
          </GridItem>
        ))}
      </ResponsiveGrid>
    </Stack>
  );
};

export default Houses;
