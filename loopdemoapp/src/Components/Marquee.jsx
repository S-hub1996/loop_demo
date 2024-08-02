// import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { Box, Code, Text, useColorModeValue } from "@chakra-ui/react";
// import times from "lodash/times";
import Marquee from "react-fast-marquee";

export default function MarqueeSlider(){



 return <Box  height={["60px","50px"]} bg={'#723de8'}  textAlign={'center'} >
  {/* <Marquee > */}
    <Text  color={"gray.100"} fontWeight={'semibold'} pt={4} fontSize={['sm','md']}>Welcome to Loop Subscription's demo store 🚀 𝘒𝘯𝘰𝘸 𝘮𝘰𝘳𝘦 𝘢𝘣𝘰𝘶𝘵 𝘓𝘰𝘰𝘱 →
</Text>
  {/* </Marquee> */}
</Box>

}