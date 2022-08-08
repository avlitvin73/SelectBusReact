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



  const selectChangeHandler = event => {
    console.log(event.target.value)
    setSomeCategory(event.target.value)
    setIsShowed(true)
  }

  const itemChangeHandler = event => {
    console.log(event.target.value)
    setSomeItem(event.target.value)
  }



  const { items } = useTypedSelector(state => state.item)
  const { loadItems } = useActions()
  useEffect(() => {
    loadItems(someCategory)
  }, [someCategory])
  const [someItem, setSomeItem] = useState(1)



  console.log(items)

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
              onChange={itemChangeHandler}
              options={items} />}
          </div>
        </div>
      </div>
    </div>

  )
}