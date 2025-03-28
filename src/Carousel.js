import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  //Ensures photos is an array and has elements
  if (!photos || photos.length === 0) {
    return <p>No images avaliable</p>;
  }

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    if (currCardIdx < total - 1) setCurrCardIdx(currCardIdx + 1);
  }

  const goBackwards = () => {
    if (currCardIdx > 0) setCurrCardIdx(currCardIdx - 1);
  };

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {/* Left arrow invisable on first image */}
        {currCardIdx > 0 && (
          <i className="bi bi-arrow-left-circle" onClick={goBackwards} />
        )}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {/* Right Arrow: invisable on last image */}
        {currCardIdx < total - 1 && (
          <i className="bi bi-arrow-right-circle" onClick={goForward} />
        )}
      </div>
    </div>
  );
}

export default Carousel;
