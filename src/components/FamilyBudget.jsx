import { useState } from "react"
import Form from "./Form"
import { Box } from '@chakra-ui/react'

const FamilyBudget = () => {
  const [item, setItem] = useState('')
  const [price, setPrice] = useState('')
  const [text, setText] = useState('')
  const [varningText, setVarningText] = useState('')
  const [allItems, setAllItems] = useState([])
  const [total, setTotal] = useState(0)

  const handleItem = (e) => {
    setItem(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(parseInt(e.target.value))
  }

  const calcTotal = () => {
    setTotal(total + price)
    if (total + price > 50) {
      const over = (total + price - 50)
      setVarningText(`Your daily budget was exceeded by $${over}`)
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (item && price) {
      setAllItems([...allItems, {item, price}])
      calcTotal()
      setText('')
    } else if (!item) {
      setText('Item not added!')
    } else if (!price) {
      setText('Price not added!')
    }
    setItem('')
    setPrice('')
  }

  return (
    <Box m={5}>
      <Form 
        item={item}
        price={price}
        text={text}
        varningText={varningText}
        total={total}
        handleItem={handleItem}
        handlePrice={handlePrice} 
        submitForm={submitForm}
        allItems={allItems} 
      />
    </Box>
  )
}

export default FamilyBudget