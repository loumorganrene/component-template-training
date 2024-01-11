import './Dropdown.scss'
function Dropdown({ defaultValue, optionList, selectClassname, listClassname, optionClassname }: DropdownProps) {

  return (
    <>
      <button
        role="combobox"
        id="select"
        value="Select"
        aria-controls="listbox"
        aria-haspopup="listbox"
        tabIndex={0}
        aria-expanded='false'
        className={selectClassname ? "dropdown" + selectClassname : "dropdown"}
      >
        {defaultValue ? defaultValue : "Select"}
      </button>
      <ul
        role="listbox"
        id="listbox"
        className={listClassname ? "dropdown__list" + listClassname : "dropdown"}
      >
        {optionList.map((option) =>
          <li
            role="option"
            className={optionClassname ? "dropdown__option" + optionClassname : "dropdown"}
          >
            {option}
          </li>
        )}
      </ul>
    </>
  )
}

export default Dropdown