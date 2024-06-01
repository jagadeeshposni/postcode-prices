'use client';
import { PriceDataByPropertyType } from '@/app/lib/definitions';
import { AreaChart, Card } from '@tremor/react';
import HouseTypeSwitches from '../dashboard/house-type-switches';

const houseTypeColors = [
  { type: 'terraced', color: 'blue' },
  { type: 'semi_detached_houses_average_price', color: 'rose' },
  { type: 'detached_houses_average_price', color: 'green' },
  { type: 'flats_average_price', color: 'yellow' },
];

export default function PricesChart
  ({
    data,
  }: {
    data: PriceDataByPropertyType[];
  }) {
  return (
    <>
      <Card className="m-4 sm:mx-auto sm:max-w-full  ">
        <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Average House Prices by Property Type
        </h3>
        <AreaChart
          data={data}
          index="transfer_date"
          //display categories using houseTypeColors
          categories={houseTypeColors.map((houseType) => houseType.type)}
          colors={houseTypeColors.map((houseType) => houseType.color)}
          showLegend={true}
          showYAxis={true}
          showGradient={true}
          startEndOnly={true}
          yAxisWidth={70}
          noDataText="Please search for a postcode to see the data..."
          className="h-[75vh]"
          curveType='monotone'
        />

      </Card>
    </>
  );
}