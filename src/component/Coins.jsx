import React, { useEffect } from 'react';
import axios from 'axios';
import {server} from '../index';
import { Container, HStack, VStack, Image, Heading,Text,Button, RadioGroup ,Radio} from '@chakra-ui/react';
import { useState } from 'react';
import Loader from './Loader';
import Error from './Error';
import { Link } from 'react-router-dom';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loader, setloader] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol = currency==="inr"?"₹":currency==="eur"?"€":"$";

   const changepage =(page)=>{
    setPage(page);setloader(true);


   }
     

   const btns = new Array(132).fill(1);



    useEffect(()=>{
    const fetchExchanges = async ()=>{
     try {
      const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      setCoins(data);
      setloader(false);
      console.log(data);

     } catch (error) {
      setError('true');
      setloader(false);
      
     }

    };
    fetchExchanges();

  },[currency,page])
  if(error) return(<Error/>);
  return (
    

   <Container maxW={"container.xl"}>

    {loader?(<Loader/>):(
      <>
      <RadioGroup value={currency} onChange={setCurrency} p={"8"} m={"4"}>
        <HStack spacing={"4"}>
          <Radio  value={"inr"}>INR</Radio>
          <Radio value={"usd"}>USD</Radio>
          <Radio value={"eur"}>EUR</Radio>
        </HStack>

      </RadioGroup>
       <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
    
       {coins.map((i)=>(
         <CoinCard 
         key ={i.id} 
         name={i.name} 
         symbol = {i.symbol} 
         currencySymbol={currencySymbol}  
         id={i.id} price={i.current_price} 
          img = {i.image}/>
       ))}
     </HStack>
     <HStack w={"full"} overflow={"auto"} p={"8"}>
      {
        btns.map((item,index)=>(
          <Button
          key={index}
           bgColor={"blackAlpha.900"}
          color={"white"}
          onClick={()=> changepage(index+1)}>
            {index+1}

          </Button>
        ))

      }
      

     </HStack>
</>
 
    )}

   
   </Container>
  );
  
 
};

const CoinCard =({name,id,img, symbol, price, currencySymbol="₹"})=>(
  <Link to={`/coin/${id}`} >
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
        {symbol}

      </Heading>
      <Text noOfLines={1}>
        {name}
      </Text>
      <Text noOfLines={1}>
        {price?`${currencySymbol}${price}`:"NA"}
      </Text>
    </VStack>


  </Link>

)

export default Coins;