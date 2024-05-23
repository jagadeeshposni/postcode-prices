'use client';
import { PriceData, PriceDataByPropertyType } from '@/app/lib/definitions';
import { AreaChart, Card, LineChart, List, ListItem } from '@tremor/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}


const statusColor = {
  terraced: 'bg-blue-500',
  semi_detached: 'bg-violet-500',
  detached: 'bg-green-500',
  flats: 'bg-yellow-500',
};

export default function Example
  // () {
  ({
    data,
  }: {
    data: PriceDataByPropertyType[];
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
          categories={[
            'terraced_houses_average_price',
            'semi_detached_houses_average_price',
            'detached_houses_average_price',
            'flats_average_price'
          ]}
          colors={['blue', 'violet', 'green', 'yellow']}
          // valueFormatter={valueFormatter}
          showLegend={true}
          showYAxis={true}
          showGradient={true}
          startEndOnly={true}
          className="mt-6 flex-grow"
        />

      </Card>
    </>
  );
}
