import CreateProfile from "@/components/auth/CreateProfile";
import PageContainer from "@/components/shared/PageContainer";
import { Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import createProfile from "@/assets/images/createprofile.png";

const page = () => {
  return (
    <PageContainer>
      <Stack direction={["column", "row"]}>
        <Box>
          <Image
            src={createProfile}
            width={300}
            height={300}
            alt="create profile"
          />
        </Box>
        <CreateProfile />
      </Stack>
    </PageContainer>
  );
};

export default page;
