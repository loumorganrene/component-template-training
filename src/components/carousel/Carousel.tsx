import { useEffect, useState } from 'react'
import { CarouselProps } from './Carousel.type'
import './Carousel.scss'


function Carousel({ children, navPosition, navBullet }: CarouselProps) {
    /** Move to the next slide in the carousel. */
    const next = () => {
        if (currentIndex < childrenLength - 1) {
            setCurrentIndex(prevState => prevState + 1)
        }
        // If currently on the last slide, loop back to the first slide.
        if (currentIndex === childrenLength - 1) {
            setCurrentIndex(0)
        }
    }
    /** Move to the previous slide in the carousel. */
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
        // If currently on the first slide, loop to the last slide.
        if (currentIndex === (0)) {
            setCurrentIndex(childrenLength - 1)
        }
    }
    /**
     * Navigate to a specific slide by index.
     *
     * @param {number} index - The index of the slide to navigate to.
     */
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    }

    const [currentIndex, setCurrentIndex] = useState(0)
    const [childrenLength, setChildrenLength] = useState(children.length)

    useEffect(() => {
        setChildrenLength(children.length)
    }, [children])

    return (
        <div className="carousel">
            <div className="carousel__wrapper">
                {navPosition === 'classic' &&
                    <button className="left-arrow" onClick={prev}>
                        <div className='svg-container'>
                            <svg viewBox="0 0 24 24" width={200} height={200} fill="none" stroke="#00000080" strokeWidth="1" strokeLinecap="butt"><path d="M15 18l-6-6 6-6" /></svg>
                        </div>
                    </button>
                }

                <div className="carousel__content__container">
                    <div className="carousel__content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>

                {navPosition === 'classic' &&
                    <button className="right-arrow" onClick={next}>
                        <div className='svg-container'>
                            <svg viewBox="0 0 24 24" width={200} height={200} fill="none" stroke="#00000080" strokeWidth="1" strokeLinecap="butt"><path d="M9 18l6-6-6-6" /></svg>
                        </div>
                    </button>
                }

                {/* Bottom chevrons navigation */}
                {navPosition === 'bottom' &&
                    <div className="carousel__navigation--bottom">
                        <button className="left-arrow" onClick={prev}>
                            <svg viewBox="0 0 24 24" width={200} height={200} fill="none" stroke="#00000080" strokeWidth="1" strokeLinecap="butt"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>

                        <button className="right-arrow" onClick={next}>
                            <svg viewBox="0 0 24 24" width={200} height={200} fill="none" stroke="#00000080" strokeWidth="1" strokeLinecap="butt"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>
                }

                {/* Bullet points navigation */}
                {navBullet && <div className="carousel__navigation--bullet">
                    {children.map((_, index) => (
                        <button
                            key={index}
                            className={`bullet ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))
                    }
                </div>
                }

            </div>
        </div>
    )
}

export default Carousel