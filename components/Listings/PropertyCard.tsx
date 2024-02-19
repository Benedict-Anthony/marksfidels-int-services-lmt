import { formatCurrency } from "@/utils/currencyFormatter";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type PropertyItems = {
  title: string;
  banner: string | null;
  price: number;
  slug: string;
  address: string;
  category: string;
};
const PropertyCard = ({
  title,
  banner,
  price,
  slug,
  address,
  category,
}: PropertyItems) => {
  return (
    <Card>
      <CardBody>
        <Box w={["100%"]} height={"18rem"}>
          <Image
            src={banner as string}
            width={300}
            height={300}
            alt={title}
            className="w-full h-full object-cover"
          />
        </Box>
        <Heading as={"h3"} fontWeight={"500"} fontSize={22} my={2}>
          {title}
        </Heading>

        <Text my={2} fontWeight={"500"} fontSize={18}>
          {address}
        </Text>
        <Box>
          <Text fontWeight={"600"}>{formatCurrency(price)}</Text>
          <Badge
            mt={2}
            px={3}
            py={1}
            colorScheme={category.toLowerCase() === "rent" ? "green" : "blue"}
          >
            {category}
          </Badge>
        </Box>

        <Button colorScheme="blue" mt={4} fontWeight={"300"}>
          <Link href={`/listings/properties/${slug}`}>Details</Link>
        </Button>
      </CardBody>
    </Card>
  );
};

export default PropertyCard;
