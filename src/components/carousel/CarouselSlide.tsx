function CarouselSlide({ slide }: { slide: Slide }) {
  return (
    <div className="carousel__slide" >
      <div className="slide">
        <img className="slide__cover" src={slide.cover} alt={slide.title} />
        <div className="slide__description">
          <p>{slide.description}</p>
          {slide.link?.map(
            (link, index) => (
              <a key={index} href={link}>{link}</a>
            )
          )}
        </div>
      </div>

      <h3>{slide.title}</h3>
      <div className="technology__container">
        {slide.technology?.map(
          (techno, index) => (
            <img key={index} src={`${techno}`} alt={techno} />
          )
        )}
      </div>
    </div>
  )
}

export default CarouselSlide