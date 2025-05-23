"use client";

import { Card } from "flowbite-react";

export function Component(props) {
  const { title, description, image } = props;

  return (
    <Card
      className=" max-w-sm shadow-3xl  transition duration-400 ease-in-out"
      renderImage={() => (
        <img
          src={image}
          alt={`${title} image`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}