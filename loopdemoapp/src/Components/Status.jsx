import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Status = () => {
  return (
    <Box bgColor={'#f5f49c'}  rounded={20} p={10}>
        <Stack >
            <Text color={'green'} align={'left'} fontSize={'larger'} py={'4'}>
            Upcoming order : August 22, 2024
            Order now
            </Text>
            <Flex justifyContent={'space-evenly'}>
                <Button rounded={'50'} size={'lg'} w={'30%'} colorScheme='whatsapp' color={'#f5f59d'}>Order Now</Button>
                <Button rounded={'50'} size={'lg'} w={'30%'} variant={'outline'} colorScheme='darkgreen' color={'green'}>Skip</Button>
                <Button rounded={'50'} size={'lg'} w={'30%'} variant={'outline'} colorScheme='darkgreen' color={'green'}>Postpone</Button>
            </Flex>
            <Text py={'4'}  align={'left'} color={'green'}>Last order was charged on July 22, 2024</Text>
        </Stack>
    </Box>
  )
}

export default Status