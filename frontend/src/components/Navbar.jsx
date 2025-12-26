import { PlusSquareIcon} from '@chakra-ui/icons';
import {  Button, Container, Flex, HStack, useColorMode } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import {IoMoon} from "react-icons/io5";
import {LuSun} from "react-icons/lu";



const Navbar = () => {
    const {colorMode, toggleColorMode } = useColorMode()
  return (
        <Container  maxW={"1140px"} px={4}>
            <Flex
                w="100%" 
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base:"column",
                    sm: "row"
                }}
            >
                <Text
                  bgGradient='linear(to-l, #7928CA, #FF0080)'
                  bgClip='text'
                  fontSize={{base:"22", sm:"28"}}
                  fontWeight='extrabold'
                >
                <Link to={"/"}>ProductStore </Link>
                
                </Text>
                
                <HStack spacing={2}>
                    <Link to={"/create"}>
                    <Button> <PlusSquareIcon/> </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon/> : <LuSun/>}

                    </Button>

                </HStack>
          
                
            </Flex>
            
        </Container>

  )
}

export default Navbar
