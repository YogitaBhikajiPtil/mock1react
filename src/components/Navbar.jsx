import { Box,Link ,Flex,Heading} from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg="blue.400" p={4}>
        <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
            <Heading size="md"> My store</Heading>
            <Flex gap={4}>
                <Link as={RouterLink} to="/" fontWeight="bold">
                Products</Link>
                <Link as={RouterLink} to="/cart" fontWeight="bold">
                Cart{" "}
                {totalItems>0 && (
                <Badge bg="red.500" color="white">
                  {totalItems}
                </Badge>)}
                </Link>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar