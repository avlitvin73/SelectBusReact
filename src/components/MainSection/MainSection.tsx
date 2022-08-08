import { useEffect } from "react";
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
  return (
    <>
      <h1>MainSection component</h1>
      <Select />
      <MultiSelect />
    </>

  )
}