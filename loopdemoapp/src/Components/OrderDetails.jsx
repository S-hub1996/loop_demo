import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import TryCard from './TryCard'
import BonusCard from './BonusCard'
import SubscriptionCard from './SubscriptionCard'

const OrderDetails = () => {
  return (
    <Box>
        <Stack>

        <Flex>
            <Text>
            #6819250395
            </Text>
            <Button>Expired</Button>
        </Flex>
        <Text>
        $12.59 + $0 shipping
        Deliver every 2 weeks
        </Text>

        <TryCard/>
        <OrderDetails/>
        <BonusCard/>
        <SubscriptionCard/>



        </Stack>
    </Box>
  )
}

export default OrderDetails