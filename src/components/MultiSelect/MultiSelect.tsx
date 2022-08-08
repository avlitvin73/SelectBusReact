import { useEffect, useState } from "react";
import "./MultiSelect.css";

export function MultiSelect(props) {
  const [label, setLabel] = useState("manufacturer");
  const [transactionDataArray, setTransactionDataArray] = useState([]);

  const itemChangeHandler = (event) => {
    setLabel("");
    const transactionData = event.target[event.target.selectedIndex].text;
    setTransactionDataArray([...transactionDataArray, transactionData]);
    setTransactionDataArray((data) =>
      data.filter((value, index) => data.indexOf(value) === index)
    );
  };

  const buttonChangeHandler = (event) => {
    const transactionData = event.target;
    setTransactionDataArray((products) =>
      products.filter((product) => product !== event.target.innerText)
    );
  };

  return (
    <div className="multiSelect">
      <span className="multiSelect_text">Select manufacturer</span>
      <div className="multiselect_block">
        <label htmlFor="select-2" className="field_multiselect">
          {transactionDataArray.map((value) => (
            <button className="btn_multiselect" onClick={buttonChangeHandler}>
              {value}
            </button>
          ))}
          {label}
        </label>
        <input
          id="checkbox-2"
          className="multiselect_checkbox"
          type="checkbox"
        />
        <label htmlFor="checkbox-2" className="multiselect_label"></label>
        <select
          className="field_select"
          name="manufacturer"
          value={props.value}
          onChange={itemChangeHandler}
          multiple
        >
          {props.options.map((option, index) => {
            return (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
