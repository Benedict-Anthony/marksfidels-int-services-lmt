"use client";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button, Flex } from "@chakra-ui/react";

type DialogueTypes = {
  onHide: () => void;
  show: boolean;
  message: string;
  title: string;
};
export default function Dialogue({
  onHide,
  show,
  message,
  title,
}: DialogueTypes) {
  const [visible, setVisible] = useState(show);

  const clearDialogue = () => {
    setVisible(false);
    onHide();
  };

  return (
    <div className="card flex justify-content-center">
      <Dialog
        header={title}
        visible={visible}
        style={{ width: "50vw" }}
        onHide={clearDialogue}
      >
        <p className="m-0">{message}</p>
        <Flex alignItems={"end"} justifyContent={"end"}>
          <Button
            mt={3}
            textColor={"white"}
            variant={"outline"}
            className="bg-primary hover:text-dark"
          >
            Retry
          </Button>
        </Flex>
      </Dialog>
    </div>
  );
}
