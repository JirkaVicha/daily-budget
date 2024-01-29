import FamilyBudget from "./components/FamilyBudget"
import { ChakraProvider } from "@chakra-ui/react"

const App = () => {

  return (
    <div>
      <ChakraProvider>
       <FamilyBudget /> 
      </ChakraProvider>
    </div>
  )
}

export default App