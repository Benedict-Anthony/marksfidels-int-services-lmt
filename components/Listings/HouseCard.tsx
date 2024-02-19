import { formatCurrency } from "@/utils/currencyFormatter";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HouseCard = ({
  price,
  slug,
  type,
  category,
  banner,
  id,
  title,
  address,
  features,
}: ResultItem) => {
  return (
    <Link href={`/listings/houses/${slug}`}>
      <Card w={["100%"]}>
        <CardBody>
          <Box>
            <Heading as="h4" fontSize={20} mb={3} fontWeight={"400"}>
              {title}
            </Heading>
          </Box>
          <Box w={"100%"}>
            <Image
              src={banner}
              width={100}
              height={100}
              alt={title}
              className="w-full h-60 object-cover"
            />
          </Box>
          <Text fontWeight={"semibold"} mt={2}>
            {formatCurrency(price)}
          </Text>
          <Box>
            <Text fontSize={"16"} mt={1}>
              {address.city}, {address.state}
            </Text>
            {features && (
              <Stack mt={2} direction={["column", "column", "column", "row"]}>
                <Text className="text-md text-dark">
                  Bedroom:{features.bedrooms} {"|"}
                </Text>
                <Text className="text-md text-dark">
                  Bathroom:{features.bathrooms} {"|"}
                </Text>
                <Text className="text-md text-dark">
                  Packing space:{features.packing_space}
                </Text>
              </Stack>
            )}
          </Box>
        </CardBody>
        <CardFooter>
          <HStack>
            <Badge p={1} colorScheme="red">
              {type.type}
            </Badge>
            <Badge p={1} colorScheme="blue">
              {category.name}
            </Badge>
            {features.balcony && (
              <Badge
                colorScheme="green"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={2}
                p={1}
              >
                <Text>Balcony</Text> <CheckCircleIcon />
              </Badge>
            )}
          </HStack>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default HouseCard;
