"use client";

import { Card } from "flowbite-react";

/**
 * A reusable card component that displays an image, title, and description.
 * Uses Flowbite React's Card component with custom styling and image rendering.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title text displayed in the card.
 * @param {string} props.description - The description text displayed below the title.
 * @param {string} props.image - The image URL to be rendered at the top of the card.
 *
 * @returns {JSX.Element} The rendered card component.
 */
export function Component(props) {
  const { title, description, image } = props;

  return (
    /**
     * Flowbite Card with custom shadow and transition styles.
     * Image is rendered using renderImage prop for full customization.
     */
    <Card
      className="max-w-sm shadow-3xl transition duration-400 ease-in-out"
      renderImage={() => (
        <img
          src={image}
          alt={`${title} image`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
    >
      {/* Title */}
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>

      {/* Description */}
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}
