import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import AppShell from '@/components/layout/AppShell';
import DashboardHome from '@/components/dashboard/DashboardHome.tsx';

export default function App() {
  const { theme } = useAppStore();

  return (
    <main className={theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}>
      <AppShell
        title="داشبورد مالی"
        subtitle="یکشنبه، ۲۰ مهر ۱۴۰۴"
        // action={<Button>افزودن تراکنش +</Button>} // you can override header action if needed
      >
        <DashboardHome />
      </AppShell>
    </main>
  );
}
