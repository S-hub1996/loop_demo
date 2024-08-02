import { Box, Button, Flex, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import TryCard from './TryCard'
import BonusCard from './BonusCard'
import SubscriptionCard from './SubscriptionCard'
import { DrawerButton } from './Drawer'
import StepperSubs from './Stepper'
import Carasoul from './Carasoul'
import Status from './Status'
export const beers=[
    {
        id:'1',
        image:'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/6.jpg?v=1721999553',
        title:`Cocunut electrolyte`,
        mrp:`11.00`,
        offer:`9.90`
    },
    {
        id:'2',
        image:"https://cdn.shopify.com/s/files/1/0654/7079/1899/files/8.jpg?v=1721999780",
        title:`Curacao electrolyte`,
        mrp:`11.00`,
        offer:`9.90`
    },
    {
        id:'3',
        image:'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/2.jpg?v=1721999630',
        title:`Guava electrolyte`,
        mrp:`11.00`,
        offer:`9.90`
    },
    {
        id:'4',
        image:'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/7.jpg?v=1721999744',
        title:`Lime electrolyte`,
        mrp:`11.00`,
        offer:`9.90`
    }
]
const OrderDetails = () => {
    return (
        <Box color='green' textAlign={'center'} mt={[10, 20]} fontWeight={'semibold'}>
            <Stack mx={[0, 10, 20, 40]}>
                <Image src='https://cdn.shopify.com/s/files/1/0654/7079/1899/files/1_eb8c9900-ce31-4402-89b9-dfc2b84b416f.png?v=1722003738'/>
    
        
                <Flex align={'center'} mx={[10, 20, 40]}>
                    <Text>
                        ORDER  -  #6819250395 :
                    </Text>
                    <Button _hover={'none'} variant={'solid'} ml={'4'} bg={'green'} color={'yellow'} borderRadius={'20'} size={'sm'}>Active</Button>
                </Flex>
                <Text>
                    $12.59 + $0 shipping
                </Text>
                <Text>

                    Deliver every 2 weeks
                </Text>
                <Status/>
                <TryCard />
                <Carasoul pack={beers}/>
                {/* <OrderDetails/> */}

                <Flex justifyContent={'space-between'} my={4}>
                    <Text fontSize={'larger'}>
                    Saving plan details
                    </Text>
                    <DrawerButton/>
                </Flex>
                <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                    <Box p={10} rounded={10} border={'1px solid gray'}>
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
                    <Box p={10} rounded={10} border={'1px solid gray'}>
                        Order notes
                        -

                    </Box>
                    <Box p={10} rounded={10} border={'1px solid gray'}>
                        Subscription plan
                        Deliver every 2 weeks
                    </Box>
                    <Box p={10} rounded={10} border={'1px solid gray'}>
                        Shipping address
                        Abel Lesle
                        1218 San Anselmo Ave
                        San Anselmo, California, 94960
                        United States
                        +14157488744
                    </Box>
                    <Box p={10} rounded={10} border={'1px solid gray'}>
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