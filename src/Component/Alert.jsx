
"use client";

import { Alert } from "flowbite-react";

export function AlertComponent() {
  return (
    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium">User Signup Successfully</span> 
    </Alert>
  );
}
