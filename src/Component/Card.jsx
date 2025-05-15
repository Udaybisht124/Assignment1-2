
"use client";

import { Card } from "flowbite-react";


export function Component() {
const CardData = [{
    title:"card1",
    description:"here is the description of card1"
},{
    title:"card2",
    description:"here is the description of card2"
},{
    title:"card3",
    description:"here is the description of card3"
},{
    title:"card4",
    description:"here is the description of"
}]

    return (
    <Card
      className="max-w-sm"
      renderImage={() => <Image width={500} height={500} src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" alt="image 1" />}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  );
}
