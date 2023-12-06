import { ImageFill, Navbar, SimpleBlock } from "@/components";
import { ASSETS, URLS } from "@/constants";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, Search2Icon, TimeIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Divider, Drawer, DrawerContent, DrawerOverlay, Flex, Grid, HStack, Input, InputGroup, InputLeftElement, InputRightElement, LinkBox, LinkOverlay, Radio, RadioGroup, Text, Textarea, VStack, useDisclosure } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

let interval: NodeJS.Timer | null = null

function getTimeStamp(number: number) {
  const [minutes, seconds] = String((number / 60) / 1000).split(".");
  console.log(minutes, number / 1000)

  return number;
}

export function BookingDesktop() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [seconds, setSeconds] = useState(900000);
  const searchParams = useSearchParams();

  useEffect(() => {
    interval && clearInterval(interval);

    interval = setInterval(() => {
      if (seconds === 0) {
        interval && clearInterval(interval)
      } else {
        setSeconds(seconds - 1e3)
      }
    }, 1e3)
  }, [seconds])

  return (
    <>
      <Navbar />
      <Box pb={12}>
        <SimpleBlock isMobile={false}>
          <VStack spacing={4} alignItems="flex-start" bg="white" py={4} px={6}>
            <Text fontWeight="semibold" color="#BFA164">Booking Summary</Text>
            <ImageFill src={`/imgs/pik-${searchParams.get("event") || 1}.png`} style={{ objectFit: "contain" }} alt="image" wrapperProps={{ w: "full", h: "123px" }} />
            <Text fontWeight="semibold" fontSize="sm">Time</Text>
            <VStack w="full" spacing={2} alignItems="flex-start">
              <HStack>
                <ImageFill src={ASSETS.PINMAP} alt="logo" wrapperProps={{ boxSize: "24px" }} />
                <Text>BO-Pantai Indah Kapuk</Text>
              </HStack>
              <HStack>
                <ImageFill src={ASSETS.CALENDAR} alt="logo" wrapperProps={{ boxSize: "24px" }} />
                <Text>Sunday, 01 Oct 2023</Text>
              </HStack>
              <HStack>
                <ImageFill src={ASSETS.CLOCK} alt="logo" wrapperProps={{ boxSize: "24px" }} />
                <Text>21:00 pm</Text>
              </HStack>
            </VStack>
          </VStack>

          <VStack spacing={4} alignItems="flex-start" bg="white" py={4} px={6} mt={4}>
            <Text color="#BFA164" fontWeight="semibold">Additional Information</Text>
            <InputGroup>
              <Input borderRadius="xl" placeholder="Mrs." _placeholder={{ fontSize: "sm", color: "#9E9E9E" }} />
              <InputRightElement mr={2}>
                <ImageFill src={ASSETS.PERSON} alt="icon" wrapperProps={{ boxSize: "24px" }} />
              </InputRightElement>
            </InputGroup>
            <HStack w="full" spacing={2}>
              <InputGroup>
                <Input borderRadius="xl" placeholder="First Name" _placeholder={{ fontSize: "sm", color: "#9E9E9E" }} />
                <InputRightElement mr={2}>
                  <ImageFill src={ASSETS.PERSON} alt="icon" wrapperProps={{ boxSize: "24px" }} />
                </InputRightElement>
              </InputGroup>

              <InputGroup>
                <Input borderRadius="xl" placeholder="Last Name" _placeholder={{ fontSize: "sm", color: "#9E9E9E" }} />
                <InputRightElement mr={2}>
                  <ImageFill src={ASSETS.PERSON} alt="icon" wrapperProps={{ boxSize: "24px" }} />
                </InputRightElement>
              </InputGroup>
            </HStack>
            <InputGroup>
              <Input borderRadius="xl" placeholder="ratihxix@gmail.com" _placeholder={{ fontSize: "sm", color: "#9E9E9E" }} />
              <InputRightElement mr={2}>
                <ImageFill src={ASSETS.EMAIL} alt="icon" wrapperProps={{ boxSize: "24px" }} />
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <HStack spacing={1} position="absolute" top="50%" transform="translateY(-50%)" left={4}>
                <ImageFill src={ASSETS.IDN_FLAG} alt="flag" wrapperProps={{ boxSize: "22px" }} />
                <Text fontSize="sm">+62</Text>
                <ChevronDownIcon boxSize="20px" />
              </HStack>
              <Input pl="90px" borderRadius="xl" placeholder="8976545678" _placeholder={{ fontSize: "sm", color: "#9E9E9E" }} />
              <InputRightElement mr={2}>
                <ImageFill src={ASSETS.PHONE} alt="icon" wrapperProps={{ boxSize: "24px" }} />
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Textarea pl={10} borderRadius="xl" placeholder="Additional Note" _placeholder={{ fontSize: "sm", color: "#9E9E9E" }} />
              <InputLeftElement mr={2}>
                <ImageFill src={ASSETS.PEN} alt="icon" wrapperProps={{ boxSize: "24px" }} />
              </InputLeftElement>
            </InputGroup>
            <HStack fontSize="sm" justifyContent="center" w="full">
              <Text>We Are Holding Your Reservation For</Text>&nbsp;
              <Text color="#CB3A31">14:53</Text>
            </HStack>
            <Divider h="1px" />

            <HStack justifyContent="space-between" w="full">
              <Text fontWeight="semibold">TOTAL PAYMENT</Text>
              <Text fontWeight="semibold" color="#D6B87C">IDR 10.000</Text>
            </HStack>

            <HStack w="full">
              <Button as="a" href="/" fontSize="sm" w="full" variant="outline" color="#757575">Back</Button>
              <Button onClick={onOpen} fontSize="sm" w="full" color="white" bg="#D6B87C" colorScheme="orange">Continue&nbsp;&nbsp;<ChevronRightIcon boxSize="20px" /></Button>
            </HStack>
          </VStack>

          <Box {...(isOpen ? {}: { display: "none" })} position="absolute" height="full" width="full" top={0} left={0} bg="#8080801c" onClick={onClose} />
        </SimpleBlock>
      </Box>
    </>
  );
}
