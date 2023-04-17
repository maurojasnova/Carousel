import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

import Image from "next/image";
import "./carousel.css";

export const CarouselItem = ({ image, title, description, price }) => {
  return (
    <div className="carousel-item">
      <div className="carousel-item-data">
        <Image
          src={image}
          className="carousel-item-data-image"
          alt={title}
          width={190}
          height={216}
        />
        <h2 className="carousel-item-data-title">{title}</h2>
        <p className="carousel-item-data-description">{description}</p>
        <p className="carousel-item-data-price">{price}</p>
      </div>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Display number of cards depending on the screen size
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
  const isMediumScreen = window.matchMedia("(min-width: 601px) and (max-width: 900px)").matches;
  // const isLargeScreen = window.matchMedia("(min-width: 901px)").matches;
  const styles = {
    transform: isSmallScreen ? `translateX(-${activeIndex * 100}%)` : isMediumScreen ? `translateX(-${activeIndex * 50}%)` : `translateX(-${activeIndex * 33}%)`
  };

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={styles}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "50%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
