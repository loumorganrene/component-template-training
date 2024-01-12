import { useRef } from 'react'
import './Dropdown.scss'
import useDropdownNavigation from './DropdownNavigation'

function Dropdown({ defaultValue, optionList, selectClassname, listClassname, optionClassname }: DropdownProps) {
  const dropdownCombobox = useRef<HTMLButtonElement>(null)
  const dropdownListbox = useRef<HTMLUListElement>(null)

  const {
    handleClick,
    handleKeyPress
  } = useDropdownNavigation(
    {
      combobox: dropdownCombobox,
      listbox: dropdownListbox
    }
  )

  return (
    <>
      <button
        ref={dropdownCombobox}
        role="combobox"
        id="select"
        value="Select"
        aria-controls="listbox"
        aria-haspopup="listbox"
        tabIndex={0}
        aria-expanded="false"
        className={selectClassname ? "dropdown " + selectClassname : "dropdown"}
        onKeyDown={e => handleKeyPress(e)}
        onClick={e => handleClick(e)}
      >
        {defaultValue ? defaultValue : "Select"}
      </button>
      <ul
        ref={dropdownListbox}
        role="listbox"
        id="listbox"
        className={listClassname ? "dropdown__list " + listClassname : "dropdown__list"}
      >
        {optionList.map((option,i) =>
          <li
          key={option+i}
            role="option"
            className={optionClassname ? "dropdown__option " + optionClassname : "dropdown__option"}
          >
            {option}
          </li>
        )}
      </ul>
    </>
  )
}

export default Dropdown