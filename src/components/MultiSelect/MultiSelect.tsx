import './MultiSelect.css'

export function MultiSelect(props) {
  return (
    <div className="multiSelect">
      <span className="multiSelect_text">Select manufacturer</span>
      <div className="multiselect_block">
        <label htmlFor="select-2" className="field_multiselect">Manufacturer</label>
        <input id="checkbox-2" className="multiselect_checkbox" type="checkbox" />
        <label htmlFor="checkbox-2" className="multiselect_label"></label>
        <select
          className="field_select"
          name="manufacturer"
          value={props.value}
          onChange={props.onChange}
          multiple
        >
          {props.options.map((option, index) => {
            return (
              <option
                value={option.id}
                key={option.id}
              >
                {option.name}
              </option>
            )
          })}</select>
      </div>
    </div >
  )
}