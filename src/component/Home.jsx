import React from 'react'
import {Box, Image,Text} from "@chakra-ui/react";
import Bitcoin from "../assests/Bitcoin.jpeg"
import { motion} from "framer-motion";
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85h"}>
      <motion.div style={{
        height:"80vh",


      }}
      animate={{
        translateY:"20px",



      }}
      transition={{
        duration:2,
        repeatType:"reverse",
        repeat:Infinity


      }}>
      <Image w={"full"} objectFit={"contain"} src={Bitcoin} />


      </motion.div>
   

      <Text fontSize={"7xl"}
      textAlign={"center"}
      fontWeight={"thin"}
      color={"whiteAlpha.700"}
      mt={"-20"}>
        dddd
      </Text>
    </Box>
  )
}

export default Home