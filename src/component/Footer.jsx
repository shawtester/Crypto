import React from 'react'
import {Box, Stack, VStack, Avatar, Text} from "@chakra-ui/react";


const Footer = () => {
  return (
<Box
bgColor={"blackAlpha.900"}
color={"whiteAlpha.700"}
minH={"48"}
px={"16"}
py={["16", "8"]}>
    <Stack
    direction={["column", "row"]}
    h={"full"}
    alignItems={"center"}
    >
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
            <Text fontWeight={"bold"}>
                About Us

            </Text>
            <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            >
                We are Providing Crypto Trading Data.
                We are a dedicated team  passionate about  providing India's crypto community with 
                 powerful tools and insights to navigate the world of digital  currencies confidently.
            </Text>

        </VStack>
        <VStack>
            <Avatar boxSize={"28"} mt={["4", "0"]}/>
            <Text>

            </Text>
        </VStack>

    </Stack>



</Box>
  )
}

export default Footer