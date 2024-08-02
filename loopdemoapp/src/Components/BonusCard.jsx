'use client'

import { ReactNode } from 'react'
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid, Avatar } from '@chakra-ui/react'
import { FcCloseUpMode,FcMoneyTransfer,FcInTransit,FcBinoculars,FcOnlineSupport,FcSelfie } from "react-icons/fc";

export default function BonusCard() {
  return (
    <Box backgroundColor={'#f4df5d'} position={'relative'} borderRadius={40} p={10}>

      <Container maxW={'7xl'} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            color={'#1a541e'}
            justify={{ lg: 'center' }}
            >
            <Box >
              <Heading color={'#1a541e'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
              Wellness Bonus
              </Heading>

            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
              {stats.map((stat) => (
                <Flex >
                   <Avatar icon={<FcOnlineSupport/>}/>
                  
                  <Text align={'left'} ml={2} fontWeight={'semibold'} fontSize={'xl'} color={'#1a541e'}>
                    {stat.content}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Stack>
          {/* <Flex flex={1} /> */}
        </Stack>
      </Container>
    </Box>
  )
}



const stats = [
  {
    title: 'FcMoneyTransfer',
    content: (
      <>
        40% off on your first order
      </>
    ),
  },
  {
    title: 'FcInTransit',
    content: (
      <>
        A gift after 2 orders
      </>
    ),
  },
  {
    title: 'FcSelfie ',
    content: (
      <>
        20% off on your next orders
      </>
    ),
  },
  {
    title: 'FcBinoculars ',
    content: (
      <>

Sneak peek into our new product launches
      </>
    ),
  },
  {
    title: 'FcOnlineSupport ',
    content: (
      <>
        
        Free consultation with our nutrition expert
      </>
    ),
  },
  {
    title: 'FcCloseUpMode',
    content: (
      <>
Unlock VIP benefits on 8th order      </>
    ),
  },
  
]