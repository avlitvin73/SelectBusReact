import { useEffect, useState } from "react";
import MultiSelect from "../MultiSelect";
import Select from "../Select";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import './MainSection.css'

export function MainSection({ }) {
  const { categories } = useTypedSelector(state => state.category)
  const { loadCategories } = useActions()
  useEffect(() => {
    loadCategories()
  }, [])

  

  const [isShowed, setIsShowed] = useState(false)
  const [someCategory, setSomeCategory] = useState(1)
  // const [ label, setLabel] = useState('manufacturer')
  // const [ transactionDataArray, setTransactionDataArray] = useState([])


  const selectChangeHandler = event => {
    setSomeCategory(event.target.value)
    setIsShowed(true)
  }

  

  // const itemChangeHandler = event => {
  //   setLabel('')
  //   const transactionData =  event.target[event.target.selectedIndex].text
  //   setTransactionDataArray([...transactionDataArray, transactionData])

  //   // selectedValues.push(event.target[event.target.selectedIndex])
  //   setSomeItem(event.target.value)
  // }



  const { items } = useTypedSelector(state => state.item)
  const { loadItems } = useActions()
  useEffect(() => {
    loadItems(someCategory)
  }, [someCategory])
  const [someItem, setSomeItem] = useState(1)



  // console.log(items)
  

  return (
    <div className="wrapper">
      <div className="container">
        <h1>MainSection component</h1>
        <div className="createAccount">
          <div className="createAccount_inner">


            <Select
              value={someCategory}
              onChange={selectChangeHandler}
              options={categories}
            />
            {isShowed && <MultiSelect
              value={someItem}
              options={items} />}
          </div>
        </div>
      </div>
    </div>

  )
}