'use client';
import { PriceData } from '@/app/lib/definitions';
import { AreaChart, Card, List, ListItem } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// const data = [
//   {
//     date: 'Jan 23',
//     Organic: 232,
//   },
//   {
//     date: 'Feb 23',
//     Organic: 241,
//   },
//   {
//     date: 'Mar 23',
//     Organic: 291,
//   },
//   {
//     date: 'Apr 23',
//     Organic: 101,
//   },
//   {
//     date: 'May 23',
//     Organic: 318,
//   },
//   {
//     date: 'Jun 23',
//     Organic: 205,
//   },
//   {
//     date: 'Jul 23',
//     Organic: 372,
//   },
//   {
//     date: 'Aug 23',
//     Organic: 341,
//   },
//   {
//     date: 'Sep 23',
//     Organic: 387,
//   },
//   {
//     date: 'Oct 23',
//     Organic: 220,
//   },
//   {
//     date: 'Nov 23',
//     Organic: 372,
//   },
//   {
//     date: 'Dec 23',
//     Organic: 321,
//   },
// ];



const valueFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

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
          valueFormatter={valueFormatter}
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
