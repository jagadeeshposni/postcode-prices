'use client';
import { PriceData } from '@/app/lib/definitions';
import { AreaChart, Card, List, ListItem } from '@tremor/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}


const statusColor = {
  Organic: 'bg-blue-500',
  Sponsored: 'bg-violet-500',
};

export default function Example
// () {
    ({
        data,
      }: {
        data: PriceData[];
      }) {
  return (
    <>
<Card className="m-4 sm:mx-auto sm:max-w-full  ">
        <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          House Prices Sold
        </h3>
        <AreaChart
          data={data}
          index="transfer_date"
          categories={['price']}
          colors={['blue']}
          // valueFormatter={valueFormatter}
          showLegend={true}
          showYAxis={true}
          showGradient={true}
          startEndOnly={false}
          className="mt-6 flex-grow"
        />
       
      </Card>
    </>
  );
}
