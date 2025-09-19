import React from "react";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">
        Hello Nudle Accounting 👋
      </h1>
      <Button>Click me</Button>
      <Button variant="outline">Outline button</Button>
    </main>
  );
}
