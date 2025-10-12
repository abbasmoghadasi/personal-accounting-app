import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Stat cards row (we’ll build real ones in Step 2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>خالصی ماه جاری</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-extrabold">۰ تومان</CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>هزینه ماه جاری</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-extrabold text-red-600">
            ۰ تومان
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>درآمد ماه جاری</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-extrabold text-green-600">
            ۰ تومان
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>موجودی کل</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-extrabold text-blue-600">
            ۰ تومان
          </CardContent>
        </Card>
      </div>

      {/* Charts row (placeholders for Step 3) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="rounded-2xl h-80">
          <CardHeader>
            <CardTitle>بیشترین هزینه‌ها بر اساس دسته</CardTitle>
          </CardHeader>
          <CardContent className="h-56 flex items-center justify-center text-sm text-gray-500">
            (اینجا نمودار دایره‌ای خواهد بود)
          </CardContent>
        </Card>
        <Card className="rounded-2xl h-80">
          <CardHeader>
            <CardTitle>روند درآمد و هزینه (۶ ماه اخیر)</CardTitle>
          </CardHeader>
          <CardContent className="h-56 flex items-center justify-center text-sm text-gray-500">
            (اینجا نمودار خطی خواهد بود)
          </CardContent>
        </Card>
      </div>

      {/* Recent transactions (placeholder for Step 4) */}
      <Card className="rounded-2xl">
        <CardHeader className="flex items-center justify-between">
          <CardTitle>آخرین تراکنش‌ها</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-500">
          (لیست تراکنش‌ها در این بخش اضافه می‌شود)
        </CardContent>
      </Card>
    </div>
  );
}
