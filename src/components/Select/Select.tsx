import { CategoryState } from '../../types/category'
import './Select.css'

export function Select(props:CategoryState) {
  return (
    <div className="select">
      <span className="select_text">Select category</span>
      <div className="select_block">
        <label htmlFor="select-1" className="field_select">Category</label>
        <input id="checkbox-1" className="select_checkbox" type="checkbox" checked readOnly/>
        <label htmlFor="checkbox-1" className="select_label"></label>
        <select
          className="field_select"
          value={props.value}
          onChange={props.onChange}
        >
          {props.options!.map((option, index) => {
            return (
              <option

                value={option.id}
                key={option.id}
              >
                {option.name}
              </option>
            )
          })}</select>
      </div >
    </div>

  )
}