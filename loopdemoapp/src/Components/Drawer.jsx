import React from 'react'
import {
    Drawer,
    Button,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    Text
  } from '@chakra-ui/react'
export const DrawerButton = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
      
        return (
          <>
            <Button ref={btnRef} colorScheme='darkgreen' color='green' variant={'outline'}  onClick={onOpen}>
              Order history
            </Button>
            <Drawer 
            
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent backgroundColor={'#fbfccf'}>
                <DrawerCloseButton />
                <DrawerHeader color={'green'}>Past orders</DrawerHeader>
      
                <DrawerBody >
                  <Text color={'green'}>No Past Orders</Text>
                </DrawerBody>
      
                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='green'>Search</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )
      }