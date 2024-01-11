// Import
import { useEffect, useState } from "react"
import "./NavHamburger.scss"
// Component
function NavHamburger() {
  const [isToggle, setIsToggle] = useState(true)


  useEffect(() => {
    if (isToggle === false) {
      document.body.style.overflowY = 'hidden'
      document.body.style.height = '100%'
    } else {
      document.body.style.overflowY = ''
      document.body.style.height = ''
    }
  }, [isToggle])
  return (<>
    {isToggle ?
      (
        <button className="hamburger-icon" onClick={() => setIsToggle(!isToggle)}>
          <span />
          <span />
          <span />
        </button>
      ) : (
        <div>
          <button className="close-icon" onClick={() => setIsToggle(!isToggle)}>
            <span />
            <span />
          </button>
          <nav>
            <ul className="nav-links">
              <li>
                <a href='' className='link-hover-underline-animation'>Home</a>
              </li>
              <li>
                <a href='' className='link-hover-underline-animation'>About</a>
              </li>
              <li>
                <a href='' className='link-hover-underline-animation'>Work</a>
              </li>
              <li>
                <a href='' className='link-hover-underline-animation'>Services</a>
              </li>
              <li>
                <a href='' className='link-hover-underline-animation'>Blog</a>
              </li>
              <li>
                <a href='' className='link-hover-underline-animation'>Contact</a>
              </li>
            </ul>
            <section className="contact-sns-nav">
              <ul className="contact-list">
                <li><a href="">(912) 555-1234</a></li>
                <li><a href="">office@website.com</a></li>
              </ul>
              <ul className="sns-list">
                <li><a href="">f</a></li>
                <li><a href="">t</a></li>
                <li><a href="">in</a></li>
              </ul>
            </section>
          </nav>
        </div>
      )}
  </>
  )
}

export default NavHamburger
