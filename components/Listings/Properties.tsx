"use client";
import { getProperties } from "@/features/propertySlice";
import { fetchProperties } from "@/lib/fetchProperties";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import ListingSkeleton from "./ListingSkeleton";
import ResponsiveGrid from "../shared/Grid";
import PropertyCard from "./PropertyCard";
import Search from "./Search";
import DropDownMenu from "./DropDownSearch";
const SkeletonCount = [1, 2, 3, 4, 5, 6];

const Properties = () => {
  const { results } = useAppSelector((state) => state.property);
  const dispatch = useAppDispatch();
  useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
    onSuccess: (data) => {
      if (!results) {
        dispatch(getProperties(data));
      }
    },
  });

  if (!results) {
    return <ListingSkeleton count={SkeletonCount} />;
  }
  return (
    <Stack>
      <Search />
      <ResponsiveGrid>
        {results.map((item) => (
          <GridItem key={item.id}>
            <PropertyCard {...item} />
          </GridItem>
        ))}
      </ResponsiveGrid>
    </Stack>
  );
};

export default Properties;
