// Import
import Carousel from '../carousel/Carousel';
import CarouselSlide from '../carousel/CarouselSlide';
import NavBasic from '../navigations/NavBasic'
// import NavHero from '../navigations/NavHero'
// import NavHamburger from '../navigations/NavHamburger'
import Projects from '../../data/carouselContent.json'
import './Headers.scss';
// Component
function HeaderSimple() {
  return (
    <header>
      <NavBasic />
      {/* <NavHero /> */}
      {/* <NavHamburger /> */}
      <Carousel navPosition='classic' navBullet={true}>
        {Projects.project.map((project, index)=>(
          <CarouselSlide key={index} slide={project} />
        ))
        }
      </Carousel>
    </header>
  )
}

export default HeaderSimple

        {/* <p>First</p>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <p>Last</p> */}