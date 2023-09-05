import { Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button color={"white"} variant={"unstyled"}>
      <Link to ="/" ><Text fontSize={"20"} fontWeight={"bold"} color={"blue.200"}>Home</Text></Link>
      </Button>

      
      <Button color={"white"} variant={"unstyled"}>
      <Link to ="/coins" ><Text fontSize={"20"}fontWeight={'bold'} color={"blue.200"}>Coins</Text></Link>
      </Button>

      
      <Button color={"white"} variant={"unstyled"}>
      <Link to ="/exchange" ><Text fontSize={"20"} fontWeight={"bold"} color={"blue.200"}>Exchange</Text></Link>
      </Button>
      <Text fontWeight={"bold"} pl={900} color={"blue.200"}>
        Change Theme
      </Text>
     

    </HStack>
  
   
  

  )
}

export default Header