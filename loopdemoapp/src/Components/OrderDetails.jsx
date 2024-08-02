import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import TryCard from './TryCard'
import BonusCard from './BonusCard'
import SubscriptionCard from './SubscriptionCard'

const OrderDetails = () => {
  return (
    <Box textAlign={'center'}  mt={20} color={'gray.700'} fontWeight={'semibold'}>
        <Stack mx={40}>

        <Flex align={'center'} mx={40}>
            <Text>
            #6819250395 :  
            </Text>
            <Button ml={'4'} bg={'gray'} color={'green'} borderRadius={'20'} size={'sm'}>Expired</Button>
        </Flex>
        <Text>
        $12.59 + $0 shipping
        </Text>
        <Text>
            
        Deliver every 2 weeks
        </Text>

        <TryCard/>
        {/* <OrderDetails/> */}
        <Text>
            Order Details
        </Text>



        <BonusCard/>
        <SubscriptionCard/>



        </Stack>
    </Box>
  )
}

export default OrderDetails