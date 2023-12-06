import { ImageFill, Navbar, SimpleBlock } from "@/components";
import { ASSETS, URLS } from "@/constants";
import { Box, HStack, LinkBox, LinkOverlay, Text, VStack } from "@chakra-ui/react";

export function HomeDesktop() {
  return (
    <>
      <Navbar />
      <Box pb={12}>
        <SimpleBlock isMobile={false}>
          <VStack spacing={4} alignItems="flex-start" bg="white" py={4} px={6}>
            <HStack alignItems="flex-start" justifyContent="space-between" w="full">
              <Box fontSize="3xl" fontWeight="bold" w="full">
                <Text>Choose Your</Text>
                <Text color="#D6B87C">Place</Text>
              </Box>
              <ImageFill src={ASSETS.PINMAP} alt="pinmap" wrapperProps={{ boxSize: "52px" }} />
            </HStack>
            <Text fontSize="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </Text>
            <VStack w="full" spacing={0}>
              <LinkBox w="full">
                <ImageFill style={{ objectFit: "contain" }} src={ASSETS.PIKONE} alt="pik one" wrapperProps={{ w: "full", h: "123px" }} />
                <LinkOverlay href={`${URLS.EVENTS}?event=1`} />
              </LinkBox>
              <LinkBox w="full">
                <ImageFill style={{ objectFit: "contain" }} src={ASSETS.PIKTWO} alt="pik two" wrapperProps={{ w: "full", h: "123px" }} />
                <LinkOverlay href={`${URLS.EVENTS}?event=2`} />
              </LinkBox>
              <LinkBox w="full">
                <ImageFill style={{ objectFit: "contain" }} src={ASSETS.PIKTHREE} alt="pik three" wrapperProps={{ w: "full", h: "123px" }} />
                <LinkOverlay href={`${URLS.EVENTS}?event=3`} />
              </LinkBox>
            </VStack>
            <HStack fontSize="xs" spacing={1} justifyContent="center" w="full">
              <Text>Read our</Text>
              <Text color="blue">Terms & Condition, Privacy Policy</Text>
            </HStack>
          </VStack>
        </SimpleBlock>
      </Box>
    </>
  );
}
