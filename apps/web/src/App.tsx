import React from 'react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/useAppStore';

export default function App() {
  const { theme, toggleTheme } = useAppStore();

  return (
    <main
      className={`p-6 space-y-4 min-h-screen transition-colors ${
        theme === 'light'
          ? 'bg-gray-100 text-gray-900'
          : 'bg-gray-900 text-gray-100'
      }`}
    >
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
        Hello Nudle Accounting 👋
      </h1>

      <Button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
      <Button variant="outline">Outline button</Button>
    </main>
  );
}
