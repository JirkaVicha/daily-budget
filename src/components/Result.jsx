import { Heading, Text, Box, Flex, SimpleGrid, Divider, Alert, AlertIcon } from '@chakra-ui/react'

const Result = ({ total, text, allItems }) => {
  
  const currDate = new Date()
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  const formattedDate = currDate.toLocaleDateString('en-US', options)

  return (
    <Box maxWidth='550px'>
      <Text ml={3} color='red.500' fontSize='xs'>{text}</Text>
      <Box mt={5}>
        {total > 50 && 
          <Alert status='error' 
            mb={2} ml={2} 
            maxW='415px' 
            borderRadius={5}>
            <AlertIcon />{text}
          </Alert>
        }
      </Box>

    <SimpleGrid columns={2} maxWidth='431px'>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' p={4} m={2}>
      <Heading size='md'>Items:</Heading>
        {allItems.map((oneItem, index) => {
        return <Box key={index}>
          <Text>{oneItem.item.charAt(0).toUpperCase() + 
            oneItem.item.slice(1)}: ${oneItem.price}</Text>
        </Box>
      })}
      </Box>

      <Box maxW='sm' borderWidth='1px' borderRadius='lg' p={4} m={2}>
        <Heading size='md'>Total budget:</Heading>
          <Text>{formattedDate}</Text>
          <Text 
            fontSize='lg' 
            fontWeight='bold' 
            color='blue.600' 
            mt={3}>${total}
          </Text>
      </Box>
    </SimpleGrid>
    <Divider maxW='530px' mt={3} />
  </Box>
  )
}

export default Result