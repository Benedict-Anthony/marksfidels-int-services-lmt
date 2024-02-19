import TokenVerify from "@/components/auth/TokenVerify";
import React from "react";

type Params = {
  params: {
    token: string;
  };
};

const page = ({ params: { token } }: Params) => {
  return <TokenVerify token={token} />;
};

export default page;
