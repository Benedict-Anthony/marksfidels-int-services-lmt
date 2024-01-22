import PageContainer from "@/components/shared/PageContainer";
import Landing from "@/components/Home/Landing";
import { Box, Divider } from "@chakra-ui/react";
import { Fragment } from "react";
import Services from "@/components/Home/Services";
import HomeSearch from "@/components/Home/HomeSearch";
import NewsLetter from "@/components/shared/NewsLetter";
export default function Home() {
  return (
    <Fragment>
      <PageContainer>
        <Landing />
      </PageContainer>
      <Divider className="shadow mt-5" />
      <Box className="bg-gray py-4">
        <PageContainer>
          <Services />
        </PageContainer>
      </Box>
      <PageContainer>
        <HomeSearch />
        <NewsLetter />
      </PageContainer>
    </Fragment>
  );
}
