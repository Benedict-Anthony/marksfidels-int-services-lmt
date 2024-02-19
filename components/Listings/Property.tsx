"use client";
import { getProperties } from "@/features/propertySlice";
import { fetchProperties } from "@/lib/fetchProperties";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  Button,
  Divider,
  HStack,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import PropertyCard from "./PropertyCard";
import ResponsiveGrid from "../shared/Grid";
import ListingSkeleton from "./ListingSkeleton";
import { FaAngleDoubleRight } from "react-icons/fa";
import { colors } from "@/constants/colors";
import Link from "next/link";
const SkeletonCount = [1, 2, 3];

const Property = () => {
  const { results } = useAppSelector((state) => state.property);
  const dispacth = useAppDispatch();
  const { isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
    onSuccess: (data) => {
      dispacth(getProperties(data));
    },
  });
  if (isLoading) return <ListingSkeleton count={SkeletonCount} />;
  return (
    <Stack mt={14}>
      <Divider color={colors.dark} />
      <HStack align={"center"} justify={"space-between"} mt={3}>
        <Heading>Latest Properties</Heading>
        <Link href={"/listings/properties"} className="hidden md:block">
          <Button rightIcon={<FaAngleDoubleRight />} colorScheme="blue">
            More Properties
          </Button>
        </Link>
      </HStack>
      <ResponsiveGrid>
        {results.slice(0, 3).map((item) => (
          <PropertyCard key={item.id} {...item} />
        ))}
      </ResponsiveGrid>
      <Link href={"/listings/properties"} className="md:hidden">
        <Button rightIcon={<FaAngleDoubleRight />} colorScheme="blue">
          More Properties
        </Button>
      </Link>
    </Stack>
  );
};

export default Property;
