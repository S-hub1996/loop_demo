
import React from 'react'
import { Stack, Text, Button } from '@chakra-ui/react'
const TryCard = () => {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="2xl" backgroundPosition={'top'} bgImage={'https://images.unsplash.com/photo-1659256297426-cb50e6a36fd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
      <Stack direction="row" alignItems="center">
        <Text color={'gray.100'} fontWeight="semibold" fontSize={'xx-large'}>Try something new!
        </Text>
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Text  textAlign={'left'} maxW={'4xl'} color={'gray.100'} fontWeight="semibold" fontSize={'x-large'}>
        Rehydrate and replenish with our newly launched electrolytes
        </Text>
    
      </Stack>
      <Button size={'md'} w={'200px'} align={'left'} colorScheme="green">
          See all products
          </Button>
    </Stack>
  )
}

export default TryCard