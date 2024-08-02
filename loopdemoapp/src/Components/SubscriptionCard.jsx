import React from 'react'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,

  } from '@chakra-ui/react'

const SubscriptionCard = () => {
  return (
    <Container w={'100%'} bgColor={'#7439fe'}>
    <Stack 
    
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
    //   w={'auto'}
      >
      <Heading
        fontWeight={'bold'}
        fontFamily={'fantasy'}
        fontSize={{ base: '4xl', sm: '6xl'}}
        lineHeight={'110%'}
        color={'white'}>
        This store is powered by <br />
        <Text as={'span'} color={'green.100'}>
        Loop subscriptions!
        </Text>
      </Heading>
      <Text color={'gray.100'} fontSize={'larger'}>
    
Turn your customers into subscribers and drive recurring revenue for your DTC brand.
      </Text>
      <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
        <Button
          color={'gray.100'}
          bg={'#5d3296'}
        //   rounded={'full'}
          px={6}
          _hover={{

            bg: '#667eea',
          }}>
          Book a Demo
        </Button>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
        
      </Stack>
    </Stack>
  </Container>
  )
}

export default SubscriptionCard