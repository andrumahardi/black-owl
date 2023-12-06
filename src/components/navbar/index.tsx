import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { ImageFill } from "../image-fill";
import { ASSETS } from "@/constants";

export function Navbar() {
  return (
    <HStack bg="black" w="full" px={4} py={2} justifyContent="space-between" mb={8}>
      <ImageFill
        src={ASSETS.NAVBAR_LOGO}
        alt="navbar logo"
        style={{ objectFit: "contain" }}
        wrapperProps={{ h: "52px", w: "356px" }}
      />

      <ImageFill
        src={ASSETS.HAMBURGER_ICON}
        alt="navbar logo"
        wrapperProps={{ boxSize: "24px" }}
      />
    </HStack>
  );
}
