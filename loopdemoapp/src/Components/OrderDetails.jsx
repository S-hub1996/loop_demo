import { Box, Button, Flex, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import TryCard from './TryCard'
import BonusCard from './BonusCard'
import SubscriptionCard from './SubscriptionCard'
import { DrawerButton } from './Drawer'

const OrderDetails = () => {
    return (
        <Box color='green' textAlign={'center'} mt={[10, 20]} fontWeight={'semibold'}>
            <Stack mx={[0, 10, 20, 40]}>

                <Flex align={'center'} mx={[10, 20, 40]}>
                    <Text>
                        ORDER  -  #6819250395 :
                    </Text>
                    <Button ml={'4'} bg={'gray'} color={'green'} borderRadius={'20'} size={'sm'}>Expired</Button>
                </Flex>
                <Text>
                    $12.59 + $0 shipping
                </Text>
                <Text>

                    Deliver every 2 weeks
                </Text>

                <TryCard />
                {/* <OrderDetails/> */}

                <Flex justifyContent={'space-between'} my={4}>
                    <Text fontSize={'larger'}>
                    Saving plan details
                    </Text>
                    <DrawerButton/>
                </Flex>
                <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                    <Box p={10} rounded={10} border={'1px solid black'}>
                        <Flex>

                            <Image border={'1px solid black'} rounded={10} src='https://cdn.shopify.com/s/files/1/0654/7079/1899/products/DIAPER24.png?v=1660651371' w={'100px'} />
                            <Text>

                                Baby Diaper | Rash free + Extra Soft
                                Subscription discount (10%)

                                $12.59 <Text textDecoration={'line-through'}>

                                    $13.99
                                </Text>
                            </Text>

                        </Flex>

                    </Box>
                    <Box p={10} >

                    </Box>
                    <Box p={10} rounded={10} border={'1px solid black'}>
                        Order notes
                        -

                    </Box>
                    <Box p={10} rounded={10} border={'1px solid black'}>
                        Subscription plan
                        Deliver every 2 weeks
                    </Box>
                    <Box p={10} rounded={10} border={'1px solid black'}>
                        Shipping address
                        Abel Lesle
                        1218 San Anselmo Ave
                        San Anselmo, California, 94960
                        United States
                        +14157488744
                    </Box>
                    <Box p={10} rounded={10} border={'1px solid black'}>
                        Payment details
                        Visa ending in 4242
                        Expires 2/29
                        Last updated on: May 5, 2023

                    </Box>



                </SimpleGrid>
                Last update mail sent on: July 24, 2024




                <BonusCard />





            </Stack>
            <SubscriptionCard />
        </Box>
    )
}

export default OrderDetails