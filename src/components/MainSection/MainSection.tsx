import { useEffect, useState } from "react";
import MultiSelect from "../MultiSelect";
import Select from "../Select";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";


export function MainSection({ }) {
  const { categories } = useTypedSelector(state => state.category)
  const { loadCategories } = useActions()
  useEffect(() => {
    loadCategories()
  }, [])


  const [someValue, setSomeVaue] = useState(1)


  const selectChangeHandler = event => {
    console.log(event.target.value)
    setSomeVaue(event.target.value)
  }

  return (
    <>
      <h1>MainSection component</h1>
      <Select
        label="Выберете"
        value={someValue}
        onChange={selectChangeHandler}
        options={categories}
      />
      <MultiSelect />
    </>

  )
}