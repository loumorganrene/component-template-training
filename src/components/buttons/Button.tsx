/**
 * Represents a simple button component with customizable CSS class and text content.
 *
 * @typedef {Object} ButtonProps
 * @property {string} className - The className to be applied on the button.
 * @property {Function} onClick - The callback function to be called when the button is clicked.
 * @property {string} content - The text content to be displayed inside the button.
 * @returns {JSX.Element} The Button component JSX element.
 * @example
 * <Button onClick={() => console.log("Button clicked")} content="Click Me" />
 */
function Button({ onClick, content, className }: ButtonProps) {
    return (
        <button
            className={className}
            type='button'
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export default Button