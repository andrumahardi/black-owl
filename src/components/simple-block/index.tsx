import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export function SimpleBlock({
  children,
  isMobile,
}: {
  children: React.ReactNode;
  isMobile: boolean;
}) {
  return (
    <Flex justifyContent="center" alignItems="center" w="full">
      <Box
        w={isMobile ? "full" : "360px"}
        position="relative"
        bg="#FBF2DF"
        {...(isMobile
          ? {}
          : {
              boxShadow: "0 2px 8px #0000001A",
            })}
      >
        {children}
      </Box>
    </Flex>
  );
}
