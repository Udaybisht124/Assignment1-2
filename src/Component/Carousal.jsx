import { Carousel } from "flowbite-react";

/**
 * A React component that displays a carousel using Flowbite React's Carousel component.
 * The carousel shows multiple images with responsive height adjustments.
 *
 * @component
 * @returns {JSX.Element} The rendered carousel component.
 */
export function CarousalComponent() {
  return (
    /**
     * Container for the carousel with responsive height settings.
     * @type {JSX.Element}
     */
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-10">
      {/* Flowbite Carousel containing images */}
      <Carousel>
        <img src="src/assets/walpaper.jpg" alt="Slide 1" />
        <img src="src/assets/Home.jpg" alt="Slide 2" />
        <img src="src/assets/walpaper.jpg" alt="Slide 3" />
        <img src="src/assets/Home.jpg" alt="Slide 4" />
        <img src="src/assets/walpaper.jpg" alt="Slide 5" />
      </Carousel>
    </div>
  );
}
