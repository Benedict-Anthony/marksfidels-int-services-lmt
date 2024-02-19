"use client";
import { getHouses } from "@/features/houseSlice";
import { fetchHouses } from "@/lib/fetchHouses";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useState } from "react";
import { useQuery } from "react-query";
import HouseCard from "./HouseCard";
import { Button, GridItem, HStack, Heading, Stack } from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Dialogue from "../shared/Dialogue";
import ResponsiveGrid from "../shared/Grid";
import ListingSkeleton from "./ListingSkeleton";
import Link from "next/link";

const SkeletonCount = [1, 2, 3];
const House = () => {
  const dispatch = useAppDispatch();
  const { results } = useAppSelector((state) => state.house);
  const [show, setShow] = useState(false);
  const { isLoading } = useQuery({
    queryKey: "houses",
    queryFn: fetchHouses,
    onSuccess(data) {
      dispatch(getHouses(data));
    },
    onError() {
      setShow(true);
    },
  });

  if (show)
    return (
      <Dialogue
        show={show}
        onHide={() => setShow(false)}
        title="Error"
        message="Something went wrong. Please try again"
      />
    );
  if (isLoading) return <ListingSkeleton count={SkeletonCount} />;
  return (
    <Stack>
      <HStack align={"center"} justify={"space-between"} mt={3}>
        <Heading>Latest Houses</Heading>
        <Link href={"/listings/houses"} className="hidden md:block">
          <Button rightIcon={<FaAngleDoubleRight />} colorScheme="blue">
            More houses
          </Button>
        </Link>
      </HStack>

      <ResponsiveGrid>
        {results?.slice(0, 3).map((item) => (
          <GridItem key={item.id}>
            <HouseCard {...item} />
          </GridItem>
        ))}
      </ResponsiveGrid>
      <Link href={"/listings/houses"} className="md:hidden">
        <Button rightIcon={<FaAngleDoubleRight />} colorScheme="blue">
          More houses
        </Button>
      </Link>
    </Stack>
  );
};

export default House;
