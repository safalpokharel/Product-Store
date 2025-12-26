import { Container, SimpleGrid } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const {fetchProduct, products} = useProductStore()
  React.useEffect(()=>{
    fetchProduct()
  },[fetchProduct])
  console.log(products)
  
  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spacing={8}>
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='3xl'
        fontWeight='extrabold'
        textAlign={'center'}
       >
          Current Products
      </Text>

      <SimpleGrid
        columns={{
          base:1,
          md:2,
          lg:3
        }}
         spacing={10}
         w={'full'}
        >
          {products.map((product)=>{
            return <ProductCard key={product._id} product = {product}/>
          })}

      </SimpleGrid>


      {(products.length === 0) &&
      <Text
      color='gray.500'
      fontSize='md'
      textAlign={"center"}
      fontWeight='bold'
      >
        No products found {" "}

        <Link to={'/create'}>
        <Text as='span' color={'blue.500'} _hover={{textDecoration: "underline" }}>
          Create a Product
          </Text>
        </Link>
      </Text>}




      </VStack>


    </Container>

  )
}

export default HomePage
