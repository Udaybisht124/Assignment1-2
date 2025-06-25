import { Accordion } from "flowbite-react";

/**
 * ExampleAccordion is a functional component that renders
 * an FAQ-style accordion using Flowbite React's Accordion component.
 *
 * @component
 * @example
 * // Usage in a page or section
 * <ExampleAccordion />
 *
 * @returns {JSX.Element} A responsive accordion with three informational panels.
 */
export default function ExampleAccordion() {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>What is Flowbite?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of UI components built with
            Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Is Flowbite free to use?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, Flowbite is free and open-source under the MIT license.
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Where can I learn more?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Check out the documentation at{" "}
            <a
              href="https://flowbite-react.com/"
              className="text-blue-600 hover:underline"
            >
              flowbite-react.com
            </a>
            .
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
