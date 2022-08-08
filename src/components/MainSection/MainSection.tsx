import MultiSelect from "../MultiSelect";
import Select from "../Select";
import { useTypedSelector } from "./hooks/useTypedSelector";


export function MainSection({ }) {
  const { categories } = useTypedSelector(state => state.category)
  return (
    <>
      <h1>MainSection component</h1>
      <Select />
      <MultiSelect />
    </>

  )
}