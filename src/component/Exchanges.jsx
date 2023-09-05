import React, { useEffect } from 'react';
import axios from 'axios';
import {server} from '../index';
import { Container, HStack, VStack, Image, Heading,Text } from '@chakra-ui/react';
import { useState } from 'react';
import Loader from './Loader';
import Error from './Error';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loader, setloader] = useState(true);
  const [error, setError] = useState(false);
    useEffect(()=>{
    const fetchExchanges = async ()=>{
     try {
      const {data} = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setloader(false);

     } catch (error) {
      setError('true');
      setloader(false);
      
     }

    };
    fetchExchanges();

  },[])
  if(error) return(<Error/>);
  return (

   <Container maxW={"container.xl"}>

    {loader?(<Loader/>):(
       <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
    
       {exchanges.map((i)=>(
         <ExchangeCard key ={i.id} name={i.name} url={i.url} rank= {i.trust_score_rank} img = {i.image}/>
       ))}
     </HStack>
 
    )}

   
   </Container>
  );
  
 
};

const ExchangeCard =({name, img, rank, url})=>(
  <a href={url} target={"blank"}>
    <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"}
    css={{"&:hover":{
      transform:"scale(1.1)",
      backgroundColor:"#3F00FF",
      
    }}}>
      <Image
      src={img}
      w={"10"}
      h={"10"}
      objectFit={"contain"}
      alt={"Exchange"}
      
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}

      </Heading>
      <Text noOfLines={1}>
        {name}
      </Text>
    </VStack>


  </a>

)

export default Exchanges