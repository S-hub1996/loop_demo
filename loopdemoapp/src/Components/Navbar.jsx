import { React } from 'react';
import {
  Box,
  Flex,
//   Link,
  // Button,
  // useColorModeValue,
  Stack,
  // useColorMode,
  useDisclosure,
  HStack,
  IconButton,
  Image,
  Button,

} from '@chakra-ui/react';
import { CiShoppingCart,CiSearch  } from "react-icons/ci";

import {Link} from 'react-scroll'
import NavLink from './NavLink';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// import dark from '../assets/images/dark.png'
// import light from '../assets/images/light.png'
const links = [
  { name: "Shop Subscription", id: "test1" },
  { name: "Bundles", id: "test2" },
  { name: "Manage Subscriptions", id: "test3" },
  { name: "Recharge Alternative", id: "test4" },
];


export default function Navbar() {
  // const { colorMode, toggleColorMode } = useColorMode('light');
  // const { colorMode } = useColorMode('light');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box  position={'fixed'}
    w={'full'}
    zIndex={2} bg={'gray.100'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      

        <HStack spacing={4} alignItems={"center"}>
        <Link  activeClass="active"
            className="test1"
            // to="test1"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}>
        {
         
          <Image src={'https://demo.loopwork.co/cdn/shop/files/Vector.png?v=1707344688&width=60'} m={'auto'} w={20}/>
        }
      
           </Link>
         
        
  </HStack>
          <HStack as={"nav"}  spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.id}
                name={link.name}
                fontSize={15}
                onClick={() => onClose()}
              />
            ))}
          </HStack>
      
        
          <IconButton
          size={"md"}
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label={"Open Menu"}
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button color={'gray.600'}>
                <CiShoppingCart fontSize={'24'}/> 
              </Button>
              <Button color={'gray.600'}>
                <CiSearch fontSize={'24'}/> 
              </Button>
            </Stack>
          </Flex>
        </Flex>
        {isOpen ? (
        <Box
          pb={4}
          w={["100%", "100%", "80%"]}
          maxW={800}
          display={["inherit", "inherit", "none"]}
        >
          <Stack as={"nav"} spacing={4} alignItems="center" w="" >
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.id}
                name={link.name}
                w="md"
                onClick={() => onClose() }
              />
            ))}
          </Stack>
        </Box>
      ) : null}
      </Box>
    </>
  );
}