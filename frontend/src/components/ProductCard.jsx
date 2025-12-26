import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Heading,VStack, HStack, IconButton, useToast,Button,useDisclosure, Input } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'
import { useProductStore } from '../store/product'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'



function ProductCard({product}) {
    const {deleteProduct, updateProduct} = useProductStore();
    
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [updatedProduct, setUpdatedProduct] = React.useState(product);

    const handleDeleteProduct = async(id)=>{
        const {success, message} = await deleteProduct(id)
        if(!success){
            toast({
                title:'Error',
                description: message,
                status: 'error',
                isClosable: true
            })
        }else{
            toast({
                title:'Success',
                description: message,
                status: 'success',
                isClosable:true
            })
        }
    }

    const handleUpdateProduct = async(id, updatedProduct)=>{
        const {success, message} = await updateProduct(id,updatedProduct);
        onClose();
        if (!success){
            toast({
                title:"Error",
                description: message,
                status: "error",
                isClosable: true
            })
        }else{
            toast({
                title:"Success",
                description: message,
                status: "success",
                isClosable: true
            })
        }
    }

    const handleChange = (event) =>( setUpdatedProduct({...updatedProduct, [event.target.name]: event.target.value}))
    
  return (
    <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{transform:"translateY(-5px)", shadow:"xl"}}

    >
    <Image src={product.image} alt={product.name} objectFit='cover' />
        
    <Box p={4} h={48} w='full'>
        <Heading as='h3' mb={2} size='md'>
            {product.name}
        </Heading>
        <Text fontWeight='extrabold' fontSize='xl' mb={4} >
            ${product.price}

        </Text>

        <HStack>
            <IconButton icon={<EditIcon/>} colorScheme='blue' onClick={onOpen} />
            <IconButton icon={<DeleteIcon/>} colorScheme='red' onClick={() => handleDeleteProduct(product._id)}/>
           
            
        </HStack>
     

    </Box>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={3}>
                <Input placeholder='Enter Name' name='name' value={updatedProduct.name} onChange={handleChange} ></Input>
                <Input placeholder='Enter Price' name='price' value={updatedProduct.price} onChange={handleChange}></Input>
                <Input placeholder='Enter Image URL' name='image' value={updatedProduct.image} onChange={handleChange}></Input>

            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={()=>handleUpdateProduct(product._id, updatedProduct)} >Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        
     
    </Box>

  )
}

export default ProductCard
