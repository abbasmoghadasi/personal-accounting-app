import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // if you have it; otherwise inline className strings

type AppShellProps = {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

export default function AppShell({
  title,
  subtitle,
  action,
  children,
}: AppShellProps) {
  // Sidebar width
  const SIDEBAR_W = 280;

  return (
    // RTL wrapper (Persian UI)
    <div
      dir="rtl"
      className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Fixed Sidebar (right side in RTL) */}
      <aside
        className="fixed top-0 right-0 h-screen border-l bg-white dark:bg-gray-800 dark:border-gray-700"
        style={{ width: SIDEBAR_W }}
      >
        <div className="p-4 border-b dark:border-gray-700 flex items-center gap-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
            ن
          </div>
          <div className="font-bold">حسابدار</div>
        </div>

        <nav className="p-3 space-y-1">
          <NavItem icon="🏠" label="داشبورد" active />
          <NavItem icon="🧾" label="تراکنش‌ها" />
          <NavItem icon="💼" label="معاملات" />
          <NavItem icon="🏷️" label="دسته‌بندی‌ها" />
          <NavItem icon="📊" label="گزارش‌ها" />
          <NavItem icon="⚙️" label="تنظیمات" />
        </nav>

        <div className="p-4 mt-auto">
          <Button className="w-full">افزودن تراکنش +</Button>
        </div>
      </aside>

      {/* Main content with right margin equal to sidebar width */}
      <div className="min-h-screen" style={{ marginRight: SIDEBAR_W }}>
        {/* Header */}
        <header className="sticky top-0 z-10 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur border-b dark:border-gray-800">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-extrabold">داشبورد مالی</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {subtitle ?? 'یکشنبه، ۲۰ مهر ۱۴۰۴'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {action ?? (
                <Button className="rounded-xl">افزودن تراکنش +</Button>
              )}
            </div>
          </div>
        </header>

        {/* Page body */}
        <main className={cn('px-6 py-6')}>{children}</main>
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={cn(
        'w-full text-right px-3 py-2 rounded-xl transition-colors',
        active
          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200'
          : 'hover:bg-gray-100 dark:hover:bg-gray-700',
      )}
    >
      <span className="inline-flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="font-medium">{label}</span>
      </span>
    </button>
  );
}
