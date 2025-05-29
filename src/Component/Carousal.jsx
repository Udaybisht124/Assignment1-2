import { Carousel } from "flowbite-react";

export function CarousalComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-10">
      <Carousel>
        <img src="src/assets/walpaper.jpg" alt="..." />
        <img src="src/assets/Home.jpg" alt="..." />
        <img src="src/assets/walpaper.jpg" alt="..." />
        <img src="src/assets/Home.jpg" alt="..." />
        <img src="src/assets/walpaper.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
