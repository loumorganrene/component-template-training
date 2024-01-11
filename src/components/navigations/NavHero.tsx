// Import
import './NavHero.scss'
// Component
function NavHero() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href='' className='link-hover-underline-animation'>Home</a>
          </li>
          <li>
            <a href='' className='link-hover-underline-animation'>About</a>
          </li>
          <li>
            <a href='' className='link-hover-underline-animation'>Work</a>
          </li>
        </ul>
        <a href=''>
          <svg width="144" height="42" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>Logo</title>
              <text transform="matrix(5.16132, 0, 0, 5.3342, -1176.29, -671.916)" xmlSpace="preserve" textAnchor="start" fontSize="9" letterSpacing={1.2} id="logo" y="133" x="228" strokeWidth="0" stroke="#000" fill="black">LOGO</text>
            </g>
          </svg>
        </a>
        <ul>
          <li>
            <a href='' className='link-hover-underline-animation'>Services</a>
          </li>
          <li>
            <a href='' className='link-hover-underline-animation'>Team</a>
          </li>
          <li>
            <a href='' className='link-hover-underline-animation'>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavHero