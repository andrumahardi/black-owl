import { ImageFill, Navbar, SimpleBlock } from "@/components";
import { ASSETS } from "@/constants";
import { ChevronLeftIcon, ChevronRightIcon, Search2Icon, TimeIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Divider, Flex, Grid, HStack, Input, InputGroup, InputRightElement, LinkBox, LinkOverlay, Radio, RadioGroup, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

export function EventMobile() {
  const [date, setDate] = useState("");

  function handleClick() {
    setDate("");
  }

  return (
    <>
      <Navbar />
      <Box pb={12}>
        <SimpleBlock isMobile>
          <VStack spacing={4} alignItems="flex-start" bg="white" py={4} px={6}>
            <InputGroup>
              <Input borderRadius="full" borderColor="#F1D59E" placeholder="Search Event" _placeholder={{ fontSize: "sm" }} />
              <InputRightElement>
                <Search2Icon color="#F1D59E" />
              </InputRightElement>
            </InputGroup>

            <HStack w="full" justifyContent="space-between" pt={4}>
              <Text>Upcoming Event</Text>
              <ImageFill src={ASSETS.CALENDAR} alt="calendar" wrapperProps={{ boxSize: "24px" }} />
            </HStack>

            <HStack bg="#FFF9EB" border="1px solid" borderRadius="md" borderColor="#F1D59E" w="full" p={2}>
              <ImageFill src={ASSETS.LOGO} alt="logo" wrapperProps={{ boxSize: "48px" }} />
              <Box>
                <Text fontSize="sm" fontWeight="semibold">Black owl event</Text>
                <Text fontSize="xs" color="#757575">Apr 24, 2023</Text>
              </Box>
            </HStack>

            <Box w="full">
              <HStack w="full" justifyContent="space-between">
                <Text fontWeight="semibold" fontSize="2xl">May 2023</Text>

                <HStack>
                  <Button isDisabled p={0} variant="ghost"><ChevronLeftIcon boxSize="24px" /></Button>
                  <Button p={0} variant="ghost"><ChevronRightIcon boxSize="24px" /></Button>
                </HStack>
              </HStack>

              <HStack w="full" justifyContent="space-around" fontSize="sm" fontWeight="semibold" my={4}>
                <Text>Mo</Text>
                <Text>Tu</Text>
                <Text>We</Text>
                <Text>Th</Text>
                <Text>Fr</Text>
                <Text>Sa</Text>
                <Text>Su</Text>
              </HStack>

              {Array.from(Array(5)).map((_, i) => (
                <React.Fragment key={`parent-${i + 1}`}>
                  <Grid w="full" gridTemplateColumns="repeat(7, 1fr)" fontSize="sm">
                    {Array.from(Array(7)).map((_, j) => (
                      <React.Fragment key={`child-${j + 1}`}>
                        <Flex as="button" border="1px solid" borderColor="#F5F5F5" h="50px" justifyContent="center" alignItems="center" onClick={handleClick}>
                          <Text color="#404040">{j + 1}</Text>
                        </Flex>
                      </React.Fragment>
                    ))}
                  </Grid>
                </React.Fragment>
              ))}
            </Box>
          </VStack>

          <VStack spacing={4} alignItems="flex-start" bg="white" py={4} px={6} mt={4}>
            <Box pt={4}>
              <Text color="#BFA164" fontWeight="semibold">Additional Information</Text>
            </Box>
            <InputGroup>
              <Input borderRadius="full" placeholder="00:00 - 00:00" _placeholder={{ fontSize: "sm" }} />
              <InputRightElement mr={2}>
                <ImageFill src={ASSETS.CLOCK} alt="clock" wrapperProps={{ boxSize: "24px" }} />
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input borderRadius="full" placeholder="Choose Pack" _placeholder={{ fontSize: "sm" }} />
              <InputRightElement mr={2}>
                <ImageFill src={ASSETS.PERSON} alt="person" wrapperProps={{ boxSize: "24px" }} />
              </InputRightElement>
            </InputGroup>

            <Text fontSize="xs" fontWeight="semibold">
              RSVP Area
            </Text>

            <RadioGroup as={VStack} defaultValue="floor" colorScheme="orange" spacing={1} alignItems="flex-start" w="full">
              <Box>
                <Radio value="floor"><Text fontSize="sm" fontWeight="semibold">Floor</Text></Radio>
              </Box>
              <Box>
                <Radio value="room-karaoke" fontSize="sm" fontWeight="semibold"><Text fontSize="sm" fontWeight="semibold">Room Karaoke</Text></Radio>
              </Box>
            </RadioGroup>
          </VStack>


          <VStack spacing={4} alignItems="flex-start" bg="white" py={4} px={6} mt={4}>
            <Checkbox colorScheme="orange">
              <Text ml={2} fontSize="sm" color="#404040">I read and agree to the above terms and conditions</Text>
            </Checkbox>

            <HStack w="full">
              <Button as="a" href="/" fontSize="sm" w="full" variant="outline" color="#757575">Back</Button>
              <Button as="a" href="/" fontSize="sm" w="full" color="white" bg="#D6B87C" colorScheme="orange">Continue&nbsp;&nbsp;<ChevronRightIcon boxSize="20px" /></Button>
            </HStack>
          </VStack>
        </SimpleBlock>
      </Box>
    </>
  );
}
