"use client";

import { Alert } from "flowbite-react";

/**
 * AlertComponent displays a styled success alert using Flowbite's Alert component.
 * It accepts a message prop and includes a dismiss handler.
 *
 * @component
 * @example
 * <AlertComponent message="Login successful!" />
 *
 * @param {Object} props - Component props.
 * @param {string} props.message - The message to be displayed inside the alert.
 *
 * @returns {JSX.Element} A styled success alert component.
 */
export function AlertComponent(props) {
  const { message } = props;

  return (
    <Alert color="success" onDismiss={() => alert("Alert dismissed!")}>
      <span className="font-medium">{message}</span>
    </Alert>
  );
}
