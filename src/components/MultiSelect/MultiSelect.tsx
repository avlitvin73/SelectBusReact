import { useEffect, useState } from "react";
import "./MultiSelect.css";

export function MultiSelect(props) {
  const [label, setLabel] = useState("manufacturer");
  const [transactionDataArray, setTransactionDataArray] = useState([]);

  const [page, setPage] = useState(0);

  const optionsOnPage = props.options.slice(
    page * props.resultsOnpage,
    (page + 1) * props.resultsOnpage
  );
  const itemChangeHandler = (event) => {
    setLabel("");

    switch (event.target[event.target.selectedIndex].value) {
      case "menuInfo":
        return;

      case "menuPriveous":
        if (page > 0) {
          setPage(page - 1);
        }
        return;

      case "menuNext":
        if (optionsOnPage.length > 1) {
          setPage(page + 1);
        }

        return;

      default:
        const transactionData = event.target[event.target.selectedIndex].text;
        setTransactionDataArray([...transactionDataArray, transactionData]);
        setTransactionDataArray((data) =>
          data.filter((value, index) => data.indexOf(value) === index)
        );
    }
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
            <button
              key={"value" + Math.random()}
              className="btn_multiselect"
              onClick={buttonChangeHandler}
            >
              {value}
            </button>
          ))}
          {label}
        </label>
        <input
          id="checkbox-2"
          className="multiselect_checkbox"
          type="checkbox"
          readOnly
        />
        <label htmlFor="checkbox-2" className="multiselect_label"></label>

        <select
          className="field_select"
          name="manufacturer"
          value={[props.value]}
          onChange={itemChangeHandler}
          multiple
        >
          <optgroup id="menu" className="pagination">
            <option value="menuPriveous">priveous</option>
            <option value="menuInfo">{page + 1}</option>
            <option value="menuNext">next</option>
          </optgroup>
          <optgroup className="main">
            {optionsOnPage.map((option, index) => {
              return (
                <option value={option.id} key={option.id}>
                  {option.name}
                </option>
              );
            })}
          </optgroup>
        </select>
      </div>
    </div>
  );
}
