
"use client";

import { Alert } from "flowbite-react";

export function AlertComponent(props) {
  const message = props.message;
  return (

    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium">{message}</span>
    </Alert>
  );
}
