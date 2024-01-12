import { useState } from "react"

interface DropdownNavigationProps {
  combobox: React.RefObject<HTMLButtonElement>,
  listbox: React.RefObject<HTMLUListElement>
}

function useDropdownNavigation({
  combobox,
  listbox,
}: DropdownNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)


  const toggleDropdown = () => {
      listbox.current?.classList.toggle('active')
      combobox.current?.setAttribute('aria-expanded', isOpen.toString())
      setIsOpen(!isOpen)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    toggleDropdown()
    console.log(e.target)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { key } = e
    const openingKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' ']
    const closingKeys = ['Escape']

    if (
      !isOpen && openingKeys.includes(key)   ||
      isOpen && closingKeys.includes(key)
    ) {
      toggleDropdown()
    }
  }

  return {
    isOpen,
    toggleDropdown,
    handleClick,
    handleKeyPress
  }
}

export default useDropdownNavigation