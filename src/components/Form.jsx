import { Button, FormControl, Input, Heading, Flex, Box } from "@chakra-ui/react"
import Result from "./Result"
import { CalendarIcon } from '@chakra-ui/icons'

const Form = ({ 
  item, price, total, text, handleItem, 
  handlePrice, submitForm, allItems 
  }) => {
  
    return (
    <Box>
      <Heading mb={3} ml={2} color='blue.700'>
        <CalendarIcon mb={2} boxSize={6} mr={2} /> 
        Your Daily Budget
      </Heading>

      <Box>
       <Flex direction='column'>
        <FormControl>
          <Input 
            id="item"
            w='300px'
            type="text" 
            placeholder="Item" 
            value={item} 
            onChange={handleItem} 
            m={2}
          />
          <Input 
            id="price"
            w='100px'
            type="number"
            placeholder="Price"
            value={price}
            onChange={handlePrice}
            m={2}
          />
          <Button 
            onClick={submitForm}
            type="submit"
            value='Submit'
            colorScheme="blue"
            mb={1}
            ml={2}
          >
            Submit
          </Button>
        </FormControl>
      </Flex> 
      </Box>
      
      <Result 
        allItems={allItems}
        total={total} 
        text={text}
      />
    </Box>
  )
}

export default Form