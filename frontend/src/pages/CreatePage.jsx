import { Container, Heading, VStack, Box, useToast } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useProductStore } from '../store/product';



const CreatePage = () => {

  const [newProduct, setNewProduct] = React.useState({
    name:"",
    price: "",
    image: ""
  })

  const handleInputChange = (event)=>{
    const {name, value} = event.target
    setNewProduct((prevProduct)=>({
      ...prevProduct,
      [name]: value
    }))


  }
  const {createProduct} = useProductStore();
  const toast = useToast();
  
  const handleAddProduct = async() =>{
    const {success, message} = await createProduct(newProduct);
    if (!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      })
    }else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      })
    }
    setNewProduct({name: "", price: "", image:""})

    
  }


  return (
    <Container>
      <VStack spacing={8}>
        <Heading textAlign={"center"} as={"h1"}>
          Create a new product
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={'lg'} shadow={'md'} >
          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={handleInputChange}
            
            />
            <Input
              placeholder='Product Price'
              name='price'
              value={newProduct.price}
              onChange={handleInputChange}

              />
            <Input
              placeholder='Product Image'
              name='image'
              value={newProduct.image}
              onChange={handleInputChange}
            
            />

            <Button colorScheme='blue' w={'full'} onClick={handleAddProduct}> Add New Product </Button>
           

          </VStack>
          
       

        </Box>

      </VStack>


    </Container>

  )
}

export default CreatePage
