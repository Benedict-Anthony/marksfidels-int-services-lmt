import PageContainer from "@/components/shared/PageContainer";
import React, { Fragment } from "react";
import AboutLanding from "@/components/About/AboutLanding";
import { Button, ButtonGroup, HStack } from "@chakra-ui/react";
import { colors } from "@/constants/colors";
import AboutNav from "@/components/About/AboutNav";
import Main from "@/components/About/Main";
import KnwonFor from "@/components/About/KnwonFor";
import AboutServices from "@/components/About/AboutServices";
import NewsLetter from "@/components/shared/NewsLetter";

const About = () => {
  return (
    <Fragment>
      <PageContainer>
        <AboutLanding />
        <AboutNav />
      </PageContainer>
      <KnwonFor />
      <AboutServices />
      <NewsLetter />
    </Fragment>
  );
};

export default About;
