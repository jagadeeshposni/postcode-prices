"use client"
import { AreaChart } from '@tremor/react';
import { PriceData } from '@/app/lib/definitions';


const dataFormatter = (number) =>
  `$${Intl.NumberFormat('UK').format(number).toString()}`;

export default async function AreaChartHero({
    sampleData,
  }: {
    sampleData: PriceData[];
  }) {

    console.log(sampleData);

  return (
    <AreaChart
      className="h-80"
      data={sampleData}
      index="month"
      categories={['price']}
      colors={['indigo', 'rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
}

